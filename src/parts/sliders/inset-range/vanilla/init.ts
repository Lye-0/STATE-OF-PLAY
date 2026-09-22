import {mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "inset-range",
  "kind": "sliders",
  "variant": "inset",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": 62,
  "min": 0,
  "max": 100,
  "step": 1,
  "unit": "%",
  "range": false
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountSlider(element, config, options); }
