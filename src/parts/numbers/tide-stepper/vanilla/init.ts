import {mountNumber} from '../../../../shared/foundation/number';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "tide-stepper",
  "kind": "numbers",
  "variant": "tide",
  "label": "必要な量を、ちょうどよく。",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 24,
  "step": 1,
  "unit": "UNITS"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountNumber(element, config, options); }
