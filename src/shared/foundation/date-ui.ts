import {
  asStrings, createCore, escape, heading, makeOverlay, q, svg, syncHeading, uniqueId,
  type Core, type FoundationConfig, type FoundationController, type FoundationOptions, type FoundationValue,
} from './core.ts';

/** Keep dates as local calendar values; UTC conversion would change the selected day. */
export function parseDate(text: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  if (!match) return null;
  const year = Number(match[1]), month = Number(match[2]) - 1, day = Number(match[3]);
  const date = new Date(year, month, day, 12);
  if (year < 100) date.setFullYear(year);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day ? date : null;
}

export const dateText = (date: Date): string =>
  `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export function validDate(text: string, options: FoundationOptions): boolean {
  return !!parseDate(text) && (!options.minDate || text >= options.minDate) &&
    (!options.maxDate || text <= options.maxDate) && !options.isDateDisabled?.(text);
}

const pad = (value: number): string => String(value).padStart(2, '0');
const nowTime = (): string => { const now = new Date(); return `${pad(now.getHours())}:${pad(now.getMinutes())}`; };

export function parseTime(text: string): string | null {
  const raw = text.trim(), digits = /^\d{4}$/.test(raw) ? `${raw.slice(0, 2)}:${raw.slice(2)}` : raw;
  const match = /^(\d{1,2}):(\d{2})$/.exec(digits);
  if (!match) return null;
  const hour = Number(match[1]), minute = Number(match[2]);
  return hour < 24 && minute < 60 ? `${pad(hour)}:${pad(minute)}` : null;
}

function enteredDate(text: string): string {
  const raw = text.trim();
  return /^\d{8}$/.test(raw) ? `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6)}` : raw;
}

function enteredDateTime(text: string): string | null {
  const raw = text.trim(), digits = raw.replace(/\D/g, '');
  const normalized = digits.length === 12
    ? `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}T${digits.slice(8, 10)}:${digits.slice(10)}`
    : raw.replace(' ', 'T');
  const match = /^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})$/.exec(normalized);
  const time = match ? parseTime(match[2]) : null;
  return match && time ? `${match[1]}T${time}` : null;
}

function normalizeDate(value: FoundationValue, options: FoundationOptions): FoundationValue {
  if (options.mode === 'time') return parseTime(String(value ?? '')) ?? '';
  if (options.mode === 'datetime') {
    const text = enteredDateTime(String(value ?? ''));
    return text && validDate(text.slice(0, 10), options) ? text : '';
  }
  const dates = asStrings(value).map(enteredDate).filter(day => validDate(day, options));
  return options.mode === 'range' ? dates.slice(0, 2).sort() : dates[0] ?? '';
}

export function renderDateFields(options: FoundationOptions): string {
  const mode = options.mode ?? 'date', range = mode === 'range';
  const placeholder = mode === 'time' ? 'HH:mm' : mode === 'datetime' ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD';
  const label = escape(options.label ?? '日時を選択');
  return `<div class="ff-date-fields"><input data-date="0" type="text" inputmode="numeric" autocomplete="off" placeholder="${placeholder}" aria-label="${label}" aria-haspopup="dialog" aria-expanded="false"><span data-date-separator ${range ? '' : 'hidden'}>—</span><input data-date="1" type="text" inputmode="numeric" autocomplete="off" placeholder="YYYY-MM-DD" aria-label="${label} 終了日" aria-haspopup="dialog" aria-expanded="false" ${range ? '' : 'hidden'}><button type="button" data-calendar-toggle class="ff-icon-button" aria-label="${mode === 'time' ? '時刻を選択' : 'カレンダーを開く'}">${svg(mode === 'time' ? 'clock' : 'calendar')}</button></div>`;
}

export function renderTimePicker(): string {
  return `<div class="ff-time-picker" data-time-picker hidden><div class="ff-time-heading"><span>TIME / 24H</span><strong data-time-reading>--:--</strong></div><div class="ff-time-columns"><div class="ff-time-group"><span class="ff-time-column-label" aria-hidden="true">時 / HOUR</span><div class="ff-time-column" data-time-hours role="listbox" aria-label="時" tabindex="0"></div></div><div class="ff-time-group"><span class="ff-time-column-label" aria-hidden="true">分 / MINUTE</span><div class="ff-time-column" data-time-minutes role="listbox" aria-label="分" tabindex="0"></div></div></div></div>`;
}

export function renderDate(options: FoundationOptions): string {
  return heading(options) + renderDateFields(options) +
    `<div class="ff-floating ff-calendar" data-calendar hidden><div class="ff-calendar-date" data-calendar-date ${options.mode === 'time' ? 'hidden' : ''}><header class="ff-calendar-header"><button type="button" data-month="-1" aria-label="前の月">‹</button><strong data-month-title aria-live="polite"></strong><button type="button" data-month="1" aria-label="次の月">›</button></header><div class="ff-weekdays" aria-hidden="true">${['月', '火', '水', '木', '金', '土', '日'].map(day => `<span>${day}</span>`).join('')}</div><div class="ff-calendar-grid" data-calendar-grid role="grid" aria-label="日付を選択"></div></div>${renderTimePicker()}<footer><button type="button" data-today>今日</button><span>LOCAL DATE</span><button type="button" data-date-clear>クリア</button></footer></div><span class="ff-date-message" data-date-message role="status"></span>`;
}

export interface DateMotion {
  sync(options: FoundationOptions, values: string[]): void;
  show(): void;
  hide(): void;
  turn(direction: number): void;
  layout(): void;
  destroy(): void;
}

export interface DatePresentation {
  render?: (options: FoundationOptions) => string;
  motion?: (root: HTMLElement, panel: HTMLElement, controller: Core) => DateMotion;
}

/** Shared value and interaction engine for the standard and CONTINUUM calendar skins. */
export function mountDate(
  root: HTMLElement, config: FoundationConfig, options: FoundationOptions = {}, presentation: DatePresentation = {},
): FoundationController {
  const controller = createCore(root, config, options, normalizeDate);
  if (!root.querySelector('[data-calendar]')) root.innerHTML = (presentation.render ?? renderDate)(controller.options);

  const inputs = [q<HTMLInputElement>(root, '[data-date="0"]'), q<HTMLInputElement>(root, '[data-date="1"]')];
  const panel = q<HTMLElement>(root, '[data-calendar]'), grid = q<HTMLElement>(panel, '[data-calendar-grid]');
  const dateFace = q<HTMLElement>(panel, '[data-calendar-date]'), timeFace = q<HTMLElement>(panel, '[data-time-picker]');
  const hours = q<HTMLElement>(panel, '[data-time-hours]'), minutes = q<HTMLElement>(panel, '[data-time-minutes]');
  const toggle = q<HTMLButtonElement>(root, '[data-calendar-toggle]'), status = q<HTMLElement>(root, '[data-date-message]');
  panel.id = uniqueId('sop-calendar');
  panel.setAttribute('role', 'dialog');
  toggle.setAttribute('aria-controls', panel.id);
  toggle.setAttribute('aria-haspopup', 'dialog');
  inputs.forEach(input => input.setAttribute('aria-controls', panel.id));

  const motion = presentation.motion?.(root, panel, controller);
  if (motion) controller.cleanup(() => motion.destroy());
  const first = asStrings(controller.data)[0];
  let cursor = parseDate(first?.slice(0, 10) ?? '') ?? new Date();
  let view = new Date(cursor.getFullYear(), cursor.getMonth(), 1, 12);
  let rangeTarget: 'start' | 'end' | 'sequence' = 'sequence';
  let returnFocus: HTMLElement = toggle;
  let draftIndex: number | null = null;
  const overlay = makeOverlay(controller, panel, toggle, 'bottom', q<HTMLElement>(root, '.ff-date-fields'));
  let lastMode = controller.options.mode ?? 'date';

  function message(text = '', index?: number): void {
    status.textContent = text;
    if (index !== undefined) {
      inputs[index].setCustomValidity(text);
      inputs[index].setAttribute('aria-invalid', String(!!text));
    }
  }

  function syncExpanded(): void {
    inputs.forEach(input => input.setAttribute('aria-expanded', String(overlay.open)));
  }

  function hide(restoreFocus = false): void {
    overlay.hide(); motion?.hide(); syncExpanded();
    if (restoreFocus) returnFocus.focus();
  }

  function timeValue(): string {
    const raw = String(controller.data ?? '');
    return parseTime(controller.options.mode === 'datetime' ? raw.split('T')[1] ?? '' : raw) ?? '12:00';
  }

  function paintTime(): void {
    const [selectedHour, selectedMinute] = timeValue().split(':').map(Number);
    const make = (kind: 'hour' | 'minute', count: number, selected: number) =>
      Array.from({ length: count }, (_, number) => `<button type="button" role="option" tabindex="-1" id="${panel.id}-${kind}-${number}" data-time-${kind}="${number}" aria-selected="${number === selected}">${pad(number)}</button>`).join('');
    hours.innerHTML = make('hour', 24, selectedHour);
    minutes.innerHTML = make('minute', 60, selectedMinute);
    hours.setAttribute('aria-activedescendant', `${panel.id}-hour-${selectedHour}`);
    minutes.setAttribute('aria-activedescendant', `${panel.id}-minute-${selectedMinute}`);
    q(panel, '[data-time-reading]').textContent = `${pad(selectedHour)}:${pad(selectedMinute)}`;
  }

  function alignTimeLists(): void {
    for (const list of [hours, minutes]) {
      const selected = list.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!selected) continue;
      const viewport = list.getBoundingClientRect(), option = selected.getBoundingClientRect();
      const top = option.top - viewport.top + list.scrollTop;
      list.scrollTop = Math.max(0, top - (list.clientHeight - selected.clientHeight) / 2);
    }
  }

  function paintCalendar(): void {
    const restore = grid.contains(document.activeElement);
    const start = new Date(view.getFullYear(), view.getMonth(), 1, 12);
    const offset = (start.getDay() + 6) % 7;
    const values = asStrings(controller.data).map(value => value.slice(0, 10));
    const today = dateText(new Date());
    q(panel, '[data-month-title]').textContent = `${view.getFullYear()} / ${pad(view.getMonth() + 1)}`;
    grid.innerHTML = Array.from({ length: 6 }, (_, row) =>
      `<div role="row">${Array.from({ length: 7 }, (_, column) => {
        const day = new Date(start);
        day.setDate(1 - offset + row * 7 + column);
        const text = dateText(day), enabled = validDate(text, controller.options);
        const selected = values.includes(text), between = values.length === 2 && text > values[0] && text < values[1];
        return `<span role="gridcell" aria-selected="${selected}"><button type="button" data-day="${text}" tabindex="${text === dateText(cursor) ? 0 : -1}" aria-label="${text}" ${text === today ? 'aria-current="date"' : ''} ${enabled ? '' : 'disabled'} data-outside="${day.getMonth() !== view.getMonth()}" data-selected="${selected}" data-between="${between}">${day.getDate()}</button></span>`;
      }).join('')}</div>`).join('');
    if (!grid.querySelector('button[tabindex="0"]:not(:disabled)')) grid.querySelector<HTMLButtonElement>('button:not(:disabled)')?.setAttribute('tabindex', '0');
    if (restore && overlay.open) grid.querySelector<HTMLElement>('button[tabindex="0"]:not(:disabled)')?.focus();
  }

  function paint(): void {
    const mode = controller.options.mode ?? 'date';
    dateFace.hidden = mode === 'time';
    timeFace.hidden = mode !== 'time' && mode !== 'datetime';
    paintCalendar();
    paintTime();
    overlay.position();
    if (overlay.open && !timeFace.hidden) alignTimeLists();
    motion?.layout();
  }

  function show(field = 0, focusPanel = true, target: 'start' | 'end' | 'sequence' = 'sequence'): void {
    if (controller.options.disabled || controller.options.readOnly) return;
    rangeTarget = target;
    returnFocus = focusPanel ? toggle : inputs[field];
    const chosen = parseDate(asStrings(controller.data)[field]?.slice(0, 10) ?? '');
    if (chosen) { cursor = chosen; view = new Date(chosen.getFullYear(), chosen.getMonth(), 1, 12); }
    paint();
    if (!overlay.open) { overlay.show(); motion?.show(); }
    else overlay.position();
    syncExpanded();
    if (!timeFace.hidden) alignTimeLists();
    if (focusPanel) {
      if (controller.options.mode === 'time') hours.focus();
      else grid.querySelector<HTMLElement>('[tabindex="0"]:not(:disabled)')?.focus();
    }
  }

  function chooseDate(text: string): void {
    if (controller.options.disabled || controller.options.readOnly || !validDate(text, controller.options)) return;
    cursor = parseDate(text)!;
    view = new Date(cursor.getFullYear(), cursor.getMonth(), 1, 12);
    const mode = controller.options.mode ?? 'date';
    if (mode === 'range') {
      const old = asStrings(controller.data);
      let next: string[];
      let completed = false;
      if (rangeTarget === 'start' && old.length === 2) { next = [text, old[1]].sort(); completed = true; }
      else if (rangeTarget === 'end' && old[0]) { next = [old[0], text].sort(); completed = true; }
      else if (old.length === 1) { next = [old[0], text].sort(); completed = true; }
      else { next = [text]; rangeTarget = 'end'; }
      draftIndex = null;
      controller.send(next);
      message();
      if (completed) hide(true);
      else paint();
      return;
    }
    if (mode === 'datetime') {
      draftIndex = null;
      controller.send(`${text}T${timeValue()}`);
      message();
      paint();
      hours.focus();
      return;
    }
    draftIndex = null;
    controller.send(text);
    message();
    hide(true);
  }

  function chooseTime(kind: 'hour' | 'minute', number: number, finish = false): void {
    if (controller.options.disabled || controller.options.readOnly) return;
    const [hour, minute] = timeValue().split(':').map(Number);
    const time = `${pad(kind === 'hour' ? number : hour)}:${pad(kind === 'minute' ? number : minute)}`;
    if (controller.options.mode === 'datetime') {
      const currentDate = String(controller.data ?? '').slice(0, 10);
      const day = validDate(currentDate, controller.options) ? currentDate : dateText(cursor);
      if (!validDate(day, controller.options)) { message('先に選択可能な日付を指定してください。'); return; }
      controller.send(`${day}T${time}`);
    } else controller.send(time);
    draftIndex = null;
    message();
    if (finish && kind === 'minute') hide(true);
    else if (kind === 'hour') minutes.focus();
  }

  function commitField(index: number): void {
    if (controller.options.disabled || controller.options.readOnly) return;
    const raw = inputs[index].value.trim(), mode = controller.options.mode ?? 'date';
    if (!raw) {
      if (controller.options.required) { message('値を入力してください。', index); return; }
      draftIndex = null;
      if (mode === 'range') controller.send(asStrings(controller.data).filter((_, position) => position !== index));
      else controller.send('');
      message('', index);
      return;
    }
    const text = mode === 'time' ? parseTime(raw) : mode === 'datetime' ? enteredDateTime(raw) : enteredDate(raw);
    const valid = !!text && (mode === 'time' || (mode === 'datetime' ? validDate(text.slice(0, 10), controller.options) : validDate(text, controller.options)));
    if (!valid) { message(mode === 'time' ? 'HH:mm の時刻を入力してください。' : '選択可能な日付を入力してください。', index); return; }
    draftIndex = null;
    message('', index);
    if (mode === 'range') {
      const next = asStrings(controller.data);
      next[index] = text!;
      controller.send(next.filter(Boolean));
    } else controller.send(text!);
  }

  controller.sync = reason => {
    const nextMode = controller.options.mode ?? 'date';
    if (nextMode !== lastMode) { hide(); lastMode = nextMode; }
    syncHeading(controller);
    const options = controller.options, mode = options.mode ?? 'date';
    const values = asStrings(controller.data);
    root.dataset.dateMode = mode;
    inputs.forEach((input, index) => {
      input.hidden = index === 1 && mode !== 'range';
      input.type = 'text';
      input.inputMode = 'numeric';
      input.disabled = !!options.disabled || input.hidden;
      input.readOnly = !!options.readOnly;
      input.required = !!options.required;
      input.setAttribute('role', 'combobox');
      input.setAttribute('aria-haspopup', 'dialog');
      input.setAttribute('aria-label', `${options.label ?? '日時'}${mode === 'range' ? index ? ' 終了日' : ' 開始日' : ''}`);
      input.placeholder = mode === 'time' ? 'HH:mm' : mode === 'datetime' ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD';
      input.maxLength = mode === 'time' ? 5 : mode === 'datetime' ? 16 : 10;
      if (options.name) input.name = mode === 'range' ? `${options.name}[${index}]` : options.name;
      else input.removeAttribute('name');
      if (reason === 'options' || reason === 'reset' || draftIndex !== index) input.value = values[index] ?? '';
      if (reason === 'options' || reason === 'reset' || (reason === 'value' && draftIndex === null)) { input.setCustomValidity(''); input.removeAttribute('aria-invalid'); }
    });
    if (reason === 'options' || reason === 'reset') draftIndex = null;
    q<HTMLElement>(root, '[data-date-separator]').hidden = mode !== 'range';
    toggle.hidden = false;
    toggle.disabled = !!options.disabled || !!options.readOnly;
    toggle.setAttribute('aria-label', mode === 'time' ? '時刻を選択' : mode === 'datetime' ? '日付と時刻を選択' : 'カレンダーを開く');
    toggle.innerHTML = svg(mode === 'time' ? 'clock' : 'calendar');
    q<HTMLButtonElement>(panel, '[data-today]').textContent = mode === 'time' ? '現在時刻' : '今日';
    q<HTMLElement>(panel, 'footer span').textContent = mode === 'time' ? 'LOCAL TIME' : mode === 'datetime' ? 'LOCAL DATE / TIME' : 'LOCAL DATE';
    panel.setAttribute('aria-label', `${options.label ?? '日時'} ${mode === 'time' ? '時刻' : mode === 'datetime' ? '日付と時刻' : 'カレンダー'}の選択`);
    if (options.disabled || options.readOnly) hide();
    if (reason === 'options' || reason === 'reset' || reason === 'value') {
      const selected = parseDate(values[0]?.slice(0, 10) ?? '');
      if (selected) { cursor = selected; view = new Date(selected.getFullYear(), selected.getMonth(), 1, 12); }
    }
    motion?.sync(options, values);
    syncExpanded();
    paint();
  };

  inputs.forEach((input, index) => {
    controller.on(input, 'input', () => { draftIndex = index; message('', index); });
    controller.on(input, 'change', () => commitField(index));
    controller.on(input, 'click', () => show(index, false, index === 0 ? 'start' : 'end'));
    controller.on(input, 'keydown', event => {
      const key = event as KeyboardEvent;
      if (key.key === 'Enter') { key.preventDefault(); commitField(index); if (input.validity.valid) hide(true); }
      if (key.key === 'ArrowDown' && key.altKey) { key.preventDefault(); show(index, true, index === 0 ? 'start' : 'end'); }
    });
  });

  controller.on(toggle, 'click', () => overlay.open ? hide() : show(0, true, 'sequence'));
  controller.on(grid, 'click', event => {
    const day = (event.target as Element).closest<HTMLElement>('[data-day]');
    if (day) chooseDate(day.dataset.day!);
  });
  panel.querySelectorAll<HTMLButtonElement>('[data-month]').forEach(button => controller.on(button, 'click', () => {
    const direction = Number(button.dataset.month);
    view = new Date(view.getFullYear(), view.getMonth() + direction, 1, 12);
    cursor = new Date(view);
    paint();
    motion?.turn(direction);
  }));
  controller.on(grid, 'keydown', event => {
    const key = event as KeyboardEvent;
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(key.key)) return;
    key.preventDefault();
    const day = parseDate((key.target as HTMLElement).dataset.day ?? '') ?? cursor;
    const weekday = (day.getDay() + 6) % 7;
    const delta: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -weekday, End: 6 - weekday };
    if (key.key === 'PageUp' || key.key === 'PageDown') { day.setDate(1); day.setMonth(day.getMonth() + (key.key === 'PageUp' ? -1 : 1)); }
    else day.setDate(day.getDate() + delta[key.key]);
    const direction = ['ArrowLeft', 'ArrowUp', 'Home', 'PageUp'].includes(key.key) ? -1 : 1;
    let attempts = 0;
    while (!validDate(dateText(day), controller.options) && attempts++ < 366) day.setDate(day.getDate() + direction);
    if (!validDate(dateText(day), controller.options)) return;
    const previousMonth = view.getMonth();
    cursor = day;
    view = new Date(day.getFullYear(), day.getMonth(), 1, 12);
    paint();
    if (view.getMonth() !== previousMonth) motion?.turn(direction);
    grid.querySelector<HTMLElement>(`[data-day="${dateText(cursor)}"]`)?.focus();
  });
  controller.on(timeFace, 'click', event => {
    const option = (event.target as Element).closest<HTMLElement>('[data-time-hour],[data-time-minute]');
    if (!option) return;
    const kind = option.hasAttribute('data-time-hour') ? 'hour' : 'minute';
    chooseTime(kind, Number(option.dataset[kind === 'hour' ? 'timeHour' : 'timeMinute']), true);
  });
  controller.on(timeFace, 'keydown', event => {
    const key = event as KeyboardEvent;
    const list = (key.target as Element).closest<HTMLElement>('[data-time-hours],[data-time-minutes]');
    if (!list) return;
    const kind = list === hours ? 'hour' : 'minute', limit = kind === 'hour' ? 24 : 60;
    if (key.key === 'Enter' || key.key === ' ') { key.preventDefault(); if (kind === 'minute') hide(true); else minutes.focus(); return; }
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(key.key)) return;
    key.preventDefault();
    const value = Number(timeValue().split(':')[kind === 'hour' ? 0 : 1]);
    const delta = key.key === 'ArrowUp' ? -1 : key.key === 'ArrowDown' ? 1 : key.key === 'PageUp' ? -5 : 5;
    const next = key.key === 'Home' ? 0 : key.key === 'End' ? limit - 1 : (value + delta + limit) % limit;
    chooseTime(kind, next);
    list.focus();
    list.querySelector<HTMLElement>(`[data-time-${kind}="${next}"]`)?.scrollIntoView({ block: 'nearest' });
  });
  controller.on(q(panel, '[data-today]'), 'click', () => {
    if (controller.options.mode === 'time') { draftIndex = null; controller.send(nowTime()); message(); hide(true); }
    else chooseDate(dateText(new Date()));
  });
  controller.on(q(panel, '[data-date-clear]'), 'click', () => {
    if (controller.options.disabled || controller.options.readOnly) return;
    draftIndex = null;
    controller.send(controller.options.mode === 'range' ? [] : '');
    inputs.forEach((_, index) => message('', index));
    hide(true);
  });
  controller.on(document, 'pointerdown', event => {
    if (overlay.open && !root.contains(event.target as Node)) hide();
  }, { capture: true });
  controller.on(root, 'focusout', event => {
    if (root.contains((event as FocusEvent).relatedTarget as Node | null)) return;
    queueMicrotask(() => { if (!controller.dead && !root.contains(document.activeElement)) hide(); });
  });
  controller.on(document, 'keydown', event => {
    const key = event as KeyboardEvent;
    if (key.key === 'Escape' && overlay.open) { key.preventDefault(); key.stopPropagation(); hide(true); }
  }, { capture: true });

  controller.show = () => show(0, true, 'sequence');
  controller.hide = () => hide();
  controller.sync('initial');
  return controller;
}
