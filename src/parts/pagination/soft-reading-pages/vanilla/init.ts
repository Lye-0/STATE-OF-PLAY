import {mountPagination} from '../../../../shared/foundation/navigation';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "soft-reading-pages",
  "kind": "pagination",
  "variant": "essential",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12,
  "paginationLayout": "anchored"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountPagination(element, config, options); }
