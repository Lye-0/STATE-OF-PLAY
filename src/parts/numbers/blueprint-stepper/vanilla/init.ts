import {mountNumber} from '../../../../shared/foundation/number';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "blueprint-stepper",
  "kind": "numbers",
  "variant": "blueprint",
  "label": "必要な量を、ちょうどよく。",
  "description": "",
  "defaultValue": 3,
  "min": 0,
  "max": 10,
  "step": 0.25,
  "unit": "REM"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountNumber(element, config, options); }
