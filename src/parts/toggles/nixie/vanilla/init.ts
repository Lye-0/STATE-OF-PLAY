import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "nixie",
  "name": "Nixie",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 280,
  "travel": 142
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for NixieToggle.');
  return createToggleController(element, config, options);
}
