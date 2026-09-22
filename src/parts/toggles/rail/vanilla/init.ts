import { createSimpleToggleController, type SimpleToggleOptions } from '../../../../shared/simple-toggle';
const config = {
  "id": "rail",
  "name": "Rail",
  "initial": false,
  "stiffness": 270,
  "damping": 23,
  "tone": 550,
  "travel": 60
};
export function init(element: HTMLElement, options: SimpleToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for RailToggle.');
  return createSimpleToggleController(element, config, options);
}
