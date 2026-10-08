import {mountProgress, renderProgress} from '../../../../shared/foundation/feedback';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "double-orbit-progress",
  "kind": "progress",
  "variant": "essential",
  "label": "ここまでの歩みを。",
  "description": "",
  "defaultValue": 72,
  "min": 0,
  "max": 100
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { if(!element.querySelector('[data-progress]')) element.innerHTML=renderProgress({...config,...options}).replace(/<svg viewBox="0 0 120 120">[\s\S]*?<\/svg>/, "<svg viewBox=\"0 0 240 120\"><path class=\"ff-ring-base\" d=\"M120 60 C92 8 12 8 12 60 C12 112 92 112 120 60 C148 8 228 8 228 60 C228 112 148 112 120 60\"/><path class=\"ff-ring-value\" pathLength=\"100\" d=\"M120 60 C92 8 12 8 12 60 C12 112 92 112 120 60 C148 8 228 8 228 60 C228 112 148 112 120 60\"/></svg>"); return mountProgress(element, config, options); }
