/** Shared selection rules. Values, not array positions, identify options. No three-item assumption. */
export interface SelectionItem { value: string; label: string; disabled?: boolean; }
export type SelectionOrientation = 'horizontal' | 'vertical';
export function validateSelectionItems(items: readonly SelectionItem[]): void {
  const values = new Set<string>();
  for (const item of items) {
    if (!item.value || values.has(item.value)) throw new Error(`Selection values must be nonempty and unique: ${item.value}`);
    if (!item.label.trim()) throw new Error(`Provide an accessible label for ${item.value}.`);
    values.add(item.value);
  }
}
export function selectionValue(items: readonly SelectionItem[], requested?: string): string {
  return items.find(item => item.value === requested && !item.disabled)?.value ?? items.find(item => !item.disabled)?.value ?? '';
}
export function nextSelection(items: readonly SelectionItem[], current: string, step: -1 | 1 | 'first' | 'last'): string {
  const enabled = items.filter(item => !item.disabled);
  if (!enabled.length) return '';
  if (step === 'first') return enabled[0].value;
  if (step === 'last') return enabled[enabled.length - 1].value;
  const index = enabled.findIndex(item => item.value === current);
  if(index < 0) return step === 1 ? enabled[0].value : enabled[enabled.length-1].value;
  return enabled[(index + step + enabled.length) % enabled.length].value;
}
