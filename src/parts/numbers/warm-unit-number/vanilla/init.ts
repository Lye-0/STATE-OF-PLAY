import {mountNumber} from '../../../../shared/foundation/number';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "warm-unit-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "分量を調整する",
  "description": "",
  "defaultValue": 250,
  "min": 0,
  "max": 2000,
  "step": 5,
  "unit": "g"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountNumber(element, config, options); }
