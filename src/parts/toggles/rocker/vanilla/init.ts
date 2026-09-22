import { createSimpleToggleController, type SimpleToggleOptions } from '../../../../shared/simple-toggle';
const config = {
  "id": "rocker",
  "name": "Rocker",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 631,
  "travel": 44
};
export function init(element: HTMLElement, options: SimpleToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for RockerToggle.');
  return createSimpleToggleController(element, config, options);
}
