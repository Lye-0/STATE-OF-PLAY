import {mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "botanical-calendar",
  "kind": "datepickers",
  "variant": "botanical",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "14:30",
  "mode": "time"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDate(element, config, options); }
