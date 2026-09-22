import {mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-range",
  "kind": "sliders",
  "variant": "outline",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": [
    24,
    78
  ],
  "min": 0,
  "max": 100,
  "step": 5,
  "unit": "%",
  "range": true
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountSlider(element, config, options); }
