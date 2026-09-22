import {mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "obsidian-popover",
  "kind": "hints",
  "variant": "obsidian",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": false,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountHint(element, config, options); }
