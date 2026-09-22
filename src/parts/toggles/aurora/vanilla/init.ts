import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "aurora",
  "name": "Aurora",
  "initial": false,
  "stiffness": 205,
  "damping": 22,
  "tone": 469,
  "travel": 151
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for AuroraToggle.');
  return createToggleController(element, config, options);
}
