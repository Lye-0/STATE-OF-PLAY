import {mountDate} from '../../../../shared/foundation/date';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "aperture-calendar",
  "kind": "datepickers",
  "variant": "aperture",
  "label": "次の時間を、予約する。",
  "description": "",
  "defaultValue": "2026-09-23",
  "mode": "date"
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountDate(element, config, options); }
