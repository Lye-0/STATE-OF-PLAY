import {mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-pages",
  "kind": "pagination",
  "variant": "outline",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountPagination(element, config, options); }
