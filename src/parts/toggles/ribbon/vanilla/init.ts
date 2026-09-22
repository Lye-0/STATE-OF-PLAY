import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "ribbon",
  "name": "Ribbon",
  "initial": false,
  "stiffness": 210,
  "damping": 20,
  "tone": 388,
  "travel": 151
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for RibbonToggle.');
  return createToggleController(element, config, options);
}
