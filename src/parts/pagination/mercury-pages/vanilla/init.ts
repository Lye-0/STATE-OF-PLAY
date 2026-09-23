import {mountPagination} from '../../../../shared/foundation/sequence/pagination';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "mercury-pages",
  "kind": "pagination",
  "variant": "mercury",
  "label": "コレクションをめくる",
  "description": "",
  "defaultValue": 4,
  "totalPages": 12
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountPagination(element, config, options); }
