import {mountLoader} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "blueprint-loader",
  "kind": "loaders",
  "variant": "blueprint",
  "label": "静かな、制作時間。",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountLoader(element, config, options); }
