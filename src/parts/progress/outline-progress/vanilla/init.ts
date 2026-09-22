import {mountProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-progress",
  "kind": "progress",
  "variant": "outline",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountProgress(element, config, options); }
