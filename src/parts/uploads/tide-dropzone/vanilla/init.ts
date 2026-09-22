import {mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "tide-dropzone",
  "kind": "uploads",
  "variant": "tide",
  "label": "アイデアの素材を、ここに。",
  "description": "",
  "defaultValue": [],
  "multiple": true,
  "maxFiles": 4,
  "maxBytes": 10485760,
  "accept": ".png,.jpg,.webp,.txt,.pdf"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountUpload(element, config, options); }
