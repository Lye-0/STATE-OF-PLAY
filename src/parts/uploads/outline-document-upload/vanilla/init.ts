import {mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-document-upload",
  "kind": "uploads",
  "variant": "essential",
  "label": "提出用ファイル",
  "description": "",
  "defaultValue": [],
  "multiple": true,
  "maxFiles": 4,
  "maxBytes": 10485760,
  "accept": ".png,.jpg,.webp,.txt,.pdf"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountUpload(element, config, options); }
