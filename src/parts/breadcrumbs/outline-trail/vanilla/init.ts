import {mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "outline-trail",
  "kind": "breadcrumbs",
  "variant": "outline",
  "label": "あなたが、いまいる場所。",
  "description": "",
  "defaultValue": null,
  "items": [
    {
      "value": "home",
      "label": "Home",
      "href": "#home"
    },
    {
      "value": "library",
      "label": "Library",
      "href": "#library"
    },
    {
      "value": "objects",
      "label": "Objects",
      "href": "#objects"
    },
    {
      "value": "materials",
      "label": "Materials",
      "href": "#materials"
    },
    {
      "value": "paper",
      "label": "Paper"
    }
  ]
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountBreadcrumbs(element, config, options); }
