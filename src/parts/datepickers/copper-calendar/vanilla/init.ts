import {mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "copper-calendar",
  "kind": "datepickers",
  "variant": "copper",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDate(element, config, options); }
