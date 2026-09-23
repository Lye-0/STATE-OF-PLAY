import {mountDriveSlider} from '../../../../shared/drive-slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "tide-range",
  "kind": "sliders",
  "variant": "tide",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": [
    24,
    78
  ],
  "min": 0,
  "max": 100,
  "step": 1,
  "unit": "%",
  "range": true
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDriveSlider(element, config, options); }
