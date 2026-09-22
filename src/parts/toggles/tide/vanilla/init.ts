import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "tide",
  "name": "Tide",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 334,
  "travel": 158
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for TideToggle.');
  return createToggleController(element, config, options);
}
