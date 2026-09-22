import { createSimpleToggleController, type SimpleToggleOptions } from '../../../../shared/simple-toggle';
const config = {
  "id": "porcelain",
  "name": "Porcelain",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 523,
  "travel": 43
};
export function init(element: HTMLElement, options: SimpleToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for PorcelainToggle.');
  return createSimpleToggleController(element, config, options);
}
