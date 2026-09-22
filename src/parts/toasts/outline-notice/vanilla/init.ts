import {mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-notice",
  "kind": "toasts",
  "variant": "outline",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountToast(element, config, options); }
