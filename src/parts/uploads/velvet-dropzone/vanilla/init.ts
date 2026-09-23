import {mountUpload} from '../../../../shared/foundation/continuum/upload';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "velvet-dropzone",
  "kind": "uploads",
  "variant": "velvet",
  "label": "アイデアの素材を、ここに。",
  "description": "",
  "defaultValue": [],
  "multiple": true,
  "maxFiles": 4,
  "maxBytes": 10485760,
  "accept": ".png,.jpg,.webp,.txt,.pdf"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountUpload(element, config, options); }
