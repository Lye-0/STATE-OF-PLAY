import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "rack",
  "name": "Rack",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 442,
  "travel": 158
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for RackToggle.');
  return createToggleController(element, config, options);
}
