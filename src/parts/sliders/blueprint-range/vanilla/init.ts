import {mountDriveSlider} from '../../../../shared/drive-slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "blueprint-range",
  "kind": "sliders",
  "variant": "blueprint",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": 62,
  "min": 0,
  "max": 100,
  "step": 5,
  "unit": "%",
  "range": false
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDriveSlider(element, config, options); }
