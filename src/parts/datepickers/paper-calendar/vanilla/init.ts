import {mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "paper-calendar",
  "kind": "datepickers",
  "variant": "paper",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "14:30",
  "mode": "time"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDate(element, config, options); }
