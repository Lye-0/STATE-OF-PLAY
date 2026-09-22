import {mountSlider} from '../../../../shared/foundation/slider';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "obsidian-range",
  "kind": "sliders",
  "variant": "obsidian",
  "label": "値を、ちょうどよく。",
  "description": "",
  "defaultValue": 62,
  "min": 0,
  "max": 100,
  "step": 5,
  "unit": "%",
  "range": false
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountSlider(element, config, options); }
