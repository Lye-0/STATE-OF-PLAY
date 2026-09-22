import {mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "blueprint-popover",
  "kind": "hints",
  "variant": "blueprint",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountHint(element, config, options); }
