import {mountNumber as mountBaseNumber} from './number.ts';
import type {FoundationConfig, FoundationOptions, FoundationController} from './core.ts';
/** Material follows the committed native value, including controlled updates and form resets. */
export function mountSculptedNumber(root: HTMLElement, config: FoundationConfig, options: FoundationOptions = {}): FoundationController {
  const api = mountBaseNumber(root, config, options);
  const input = root.querySelector<HTMLInputElement>('[data-number]')!;
  const property = '--number-turn';
  const oldValue = root.style.getPropertyValue('--number-value');
  const oldValuePriority = root.style.getPropertyPriority('--number-value');
  const previous = root.style.getPropertyValue(property);
  const priority = root.style.getPropertyPriority(property);
  const sync = () => {
    const value = Number(input.getAttribute('aria-valuenow'));
    root.style.setProperty(property, `${(Number.isFinite(value) ? value : 0) * 18}deg`);
    root.style.setProperty('--number-value', String(Number.isFinite(value) ? value : 0));
  };
  const observer = new MutationObserver(sync);
  observer.observe(input, {attributes:true, attributeFilter:['aria-valuenow']});
  sync();
  const destroy = api.destroy.bind(api); let destroyed = false;
  api.destroy = () => {
    if (destroyed) return;
    destroyed = true; observer.disconnect(); destroy();
    if (previous) root.style.setProperty(property, previous, priority); else root.style.removeProperty(property);
    if (oldValue) root.style.setProperty('--number-value', oldValue, oldValuePriority); else root.style.removeProperty('--number-value');
  };
  return api;
}
