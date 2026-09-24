import { heading, type FoundationConfig, type FoundationController, type FoundationOptions } from '../core.ts';
import {
  mountDate as mountSharedDate, renderDateFields, renderTimePicker,
} from '../date-ui.ts';
import { attachCalendarMotion } from './calendar-motion.ts';

export { parseDate, dateText, validDate } from '../date-ui.ts';

/** CONTINUUM keeps its material artwork around the shared calendar and time controls. */
export function renderDate(options: FoundationOptions): string {
  return heading(options) + renderDateFields(options) +
    `<div class="ff-floating ff-calendar" data-calendar hidden><div class="ct-calendar-envelope" aria-hidden="true"><i></i><i></i><i></i></div><div class="ct-calendar-mast"><div class="ct-calendar-identity"><span data-ct-date-caption>日付を選択</span><strong data-ct-date-number>—</strong></div><div class="ct-calendar-scene" aria-hidden="true"></div></div><div class="ff-calendar-date" data-calendar-date ${options.mode === 'time' ? 'hidden' : ''}><header class="ff-calendar-header"><button type="button" data-month="-1" aria-label="前の月">‹</button><strong data-month-title aria-live="polite"></strong><button type="button" data-month="1" aria-label="次の月">›</button></header><div class="ff-weekdays" aria-hidden="true">${['月', '火', '水', '木', '金', '土', '日'].map(day => `<span>${day}</span>`).join('')}</div><div class="ct-calendar-page"><div class="ct-calendar-sheet" aria-hidden="true"></div><div class="ff-calendar-grid" data-calendar-grid role="grid" aria-label="日付を選択"></div></div></div>${renderTimePicker()}<footer><button type="button" data-today>今日</button><span>LOCAL DATE</span><button type="button" data-date-clear>クリア</button></footer></div><span class="ff-date-message" data-date-message role="status"></span>`;
}

export function mountDate(root: HTMLElement, config: FoundationConfig, options: FoundationOptions = {}): FoundationController {
  root.classList.add('sop-continuum');
  return mountSharedDate(root, config, options, { render: renderDate, motion: attachCalendarMotion });
}
