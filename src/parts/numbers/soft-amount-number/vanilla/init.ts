import {mountNumber} from '../../../../shared/foundation/number';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "soft-amount-number",
  "kind": "numbers",
  "variant": "essential",
  "label": "数量を選ぶ",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 24,
  "step": 1,
  "unit": "個"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountNumber(element, config, options); }
