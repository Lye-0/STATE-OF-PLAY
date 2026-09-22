import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "ember",
  "name": "Ember",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 361,
  "travel": 144
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for EmberToggle.');
  return createToggleController(element, config, options);
}
