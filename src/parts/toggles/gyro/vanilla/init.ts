import { createToggleController, type ToggleOptions } from '../../../../shared/toggle-controller';
const config = {
  "id": "gyro",
  "name": "Gyro",
  "initial": true,
  "stiffness": 210,
  "damping": 22,
  "tone": 415,
  "travel": 142
};
export function init(element: HTMLElement, options: ToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for GyroToggle.');
  return createToggleController(element, config, options);
}
