import {mountBadges} from '../../../../shared/foundation/sequence/badges';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "transit-tags",
  "kind": "badges",
  "variant": "transit",
  "label": "小さな情報に、個性を。",
  "description": "",
  "defaultValue": [
    "ready"
  ],
  "selectable": true,
  "removable": false,
  "items": [
    {
      "value": "design",
      "label": "Design",
      "badge": "8"
    },
    {
      "value": "motion",
      "label": "Motion",
      "badge": "4"
    },
    {
      "value": "ready",
      "label": "Ready"
    },
    {
      "value": "review",
      "label": "Review"
    }
  ]
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountBadges(element, config, options); }
