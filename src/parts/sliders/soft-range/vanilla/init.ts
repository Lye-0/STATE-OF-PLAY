import {mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "soft-range",
  "kind": "sliders",
  "variant": "soft",
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
