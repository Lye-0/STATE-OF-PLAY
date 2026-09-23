import {mountProgress} from '../../../../shared/foundation/continuum/progress';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "blueprint-progress",
  "kind": "progress",
  "variant": "blueprint",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountProgress(element, config, options); }
