import {mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "tide-calendar",
  "kind": "datepickers",
  "variant": "tide",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23T14:30",
  "mode": "datetime"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDate(element, config, options); }
