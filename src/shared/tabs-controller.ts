import {nextSelection, selectionValue, validateSelectionItems, type SelectionItem, type SelectionOrientation} from './selection-model';
import {createSelectionIndicator} from './selection-indicator';
import {selectionIdentity} from './selection-identity';
export interface TabsOptions {
  value?: string; onValueChange?: (value: string) => void; controlled?: boolean;
  activation?: 'automatic' | 'manual'; orientation?: SelectionOrientation; disabled?: boolean;
  /** React owns committed attributes/panels; vanilla owns them by default. */
  manageDOM?: boolean;
}
export interface TabsController {
  getValue(): string; setValue(value: string): void; refresh(): void; destroy(): void;
  setDisabled(disabled: boolean): void; setOrientation(orientation: SelectionOrientation): void;
}
export function createTabsController(root: HTMLElement, options: TabsOptions = {}): TabsController {
  const list = root.querySelector<HTMLElement>(':scope > .sop-choice-list');
  if (!list) throw new Error('Missing tablist.');
  const events = new AbortController(), prefix = selectionIdentity('tabs') + '-';
  let nextId = 0;
  const marker = createSelectionIndicator(root);
  let destroyed = false, buttons: HTMLButtonElement[] = [], items: SelectionItem[] = [];
  let selected = options.value ?? root.dataset.value ?? '', disabled = options.disabled ?? false;
  let orientation = options.orientation ?? (root.dataset.orientation === 'vertical' ? 'vertical' : 'horizontal');
  const manageDOM = options.manageDOM !== false;
  const activation = options.activation ?? root.dataset.activation ?? 'automatic';
  const panelRoot = root.querySelector<HTMLElement>(':scope > .sop-choice-panels');
  function effectiveDisabled(button: HTMLButtonElement) { return disabled || button.disabled; }
  function render() {
    if (manageDOM) {
      root.dataset.value = selected; root.dataset.orientation = orientation; root.dataset.disabled = String(disabled);
      list!.setAttribute('aria-orientation', orientation);
      buttons.forEach(button => {
        const active = button.dataset.choiceValue === selected;
        button.dataset.selected = String(active);
        button.setAttribute('aria-selected', String(active));
        button.setAttribute('aria-disabled', String(effectiveDisabled(button)));
        button.tabIndex = active && !effectiveDisabled(button) ? 0 : -1;
      });
      panelRoot?.querySelectorAll<HTMLElement>(':scope > .sop-choice-panel').forEach(panel => {
        const show = panel.dataset.panelValue === selected;
        // Preserve panel contents (input values, etc.) across switches. Hidden panels are not tabbable.
        if (!show && panel.contains(document.activeElement)) buttons.find(b => b.dataset.choiceValue === selected)?.focus({preventScroll:true});
        panel.hidden = !show;
      });
    }
    marker.refresh();
  }
  function refresh() {
    if (destroyed) return;
    buttons = [...list!.querySelectorAll<HTMLButtonElement>(':scope > button.sop-choice-item')];
    items = buttons.map(b => ({value:b.dataset.choiceValue ?? '', label:b.getAttribute('aria-label') ?? b.textContent ?? '', disabled:b.disabled}));
    validateSelectionItems(items);
    const old = selected; selected = selectionValue(items, selected);
    if (manageDOM) buttons.forEach((button,index) => {
      button.setAttribute('role','tab');
      if (!button.id) button.id = prefix + nextId++;
      const panel = [...(panelRoot?.children ?? [])].find(p => (p as HTMLElement).dataset.panelValue === button.dataset.choiceValue) as HTMLElement | undefined;
      if (!panel) throw new Error(`Tab has no associated panel: ${button.dataset.choiceValue}`);
      if (!panel.id) panel.id = button.id + '-panel';
      button.setAttribute('aria-controls',panel.id);panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);panel.tabIndex=0;
    });
    render();
    if (old && old !== selected && root.contains(document.activeElement)) buttons.find(b => b.dataset.choiceValue === selected)?.focus({preventScroll:true});
  }
  function setValue(value: string) { if (!destroyed) { selected = selectionValue(items,value); render(); } }
  function request(value: string) {
    if (destroyed || disabled || !items.some(item => item.value === value && !item.disabled) || value === selected) return;
    if (!options.controlled) setValue(value);
    options.onValueChange?.(value);
    root.dispatchEvent(new CustomEvent('sop:selection',{bubbles:true,detail:{value,kind:'tabs'}}));
  }
  list.addEventListener('click', event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button.sop-choice-item');
    if (!button || button.parentElement !== list || event.defaultPrevented) return;
    if (effectiveDisabled(button)) {event.preventDefault();return;}
    request(button.dataset.choiceValue!);
  },{signal:events.signal});
  list.addEventListener('keydown', event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button.sop-choice-item');
    if (!button || button.parentElement !== list || disabled || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const rtl = getComputedStyle(list!).direction === 'rtl';
    let step: -1 | 1 | 'first' | 'last' | undefined;
    if (event.key === 'Home') step='first'; else if(event.key === 'End') step='last';
    else if (orientation === 'vertical') { if(event.key === 'ArrowDown')step=1; if(event.key === 'ArrowUp')step=-1; }
    else { if(event.key === 'ArrowRight')step=rtl?-1:1; if(event.key === 'ArrowLeft')step=rtl?1:-1; }
    if (step === undefined) return; // Space/Enter retain native click behavior; up/down keep scrolling in horizontal tabs.
    event.preventDefault();
    const next = nextSelection(items,button.dataset.choiceValue!,step);
    const target = buttons.find(b => b.dataset.choiceValue === next);
    if (!target) return;
    buttons.forEach(b=>b.tabIndex=b===target?0:-1);target.focus({preventScroll:true});
    // Scroll only the tab strip, not the whole document.
    const itemBox=target.getBoundingClientRect(), stripBox=list!.getBoundingClientRect();
    const delta=itemBox.left<stripBox.left?itemBox.left-stripBox.left:itemBox.right>stripBox.right?itemBox.right-stripBox.right:0;
    if(delta)list!.scrollBy({left:delta,behavior:'instant'});
    if(activation==='automatic')request(next);
  },{signal:events.signal});
  list.addEventListener('focusout', event=>{if(!list!.contains(event.relatedTarget as Node | null)) buttons.forEach(b=>b.tabIndex=b.dataset.choiceValue===selected&&!effectiveDisabled(b)?0:-1);},{signal:events.signal});
  refresh();
  return {getValue:()=>selected,setValue,refresh,setDisabled(value){disabled=value;render();},setOrientation(value){orientation=value;render();},destroy(){destroyed=true;events.abort();marker.destroy();}};
}
