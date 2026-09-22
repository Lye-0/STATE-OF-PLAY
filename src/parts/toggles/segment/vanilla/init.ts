import { createSimpleToggleController, type SimpleToggleOptions } from '../../../../shared/simple-toggle';
const config = {
  "id": "segment",
  "name": "Segment",
  "initial": true,
  "stiffness": 270,
  "damping": 23,
  "tone": 577,
  "travel": 64
};
export function init(element: HTMLElement, options: SimpleToggleOptions = {}) {
  if (!(element instanceof HTMLButtonElement)) throw new TypeError('A button is required for SegmentToggle.');
  return createSimpleToggleController(element, config, options);
}
