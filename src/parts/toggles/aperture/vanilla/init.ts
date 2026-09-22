import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "aperture",
  "name": "Aperture",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 307,
  "travel": 147
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for ApertureToggle.');
  return createToggleController(element, config, options);
}
