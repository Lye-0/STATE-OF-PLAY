import { createSimpleToggleController, type SimpleToggleOptions } from '../../../../shared/simple-toggle';
const config = {
  "id": "quiet",
  "name": "Quiet",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 496,
  "travel": 40
};
export function init(element: HTMLElement, options: SimpleToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for QuietToggle.');
  return createSimpleToggleController(element, config, options);
}
