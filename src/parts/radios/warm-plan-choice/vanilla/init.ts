import {mountRadio} from '../../../../shared/foundation/radio';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "warm-plan-choice",
  "kind": "radios",
  "variant": "soft",
  "label": "制作プランを選ぶ",
  "description": "料金は展示用の例です。",
  "defaultValue": "cloud",
  "required": true,
  "items": [
    {
      "value": "local",
      "label": "Local",
      "description": "手元の環境で、静かに。",
      "badge": "¥0 / 月",
      "icon": "file"
    },
    {
      "value": "cloud",
      "label": "Cloud",
      "description": "どこからでも、つながる。",
      "badge": "¥980 / 月",
      "icon": "spark"
    },
    {
      "value": "hybrid",
      "label": "Hybrid",
      "description": "両方のよさを、ひとつに。",
      "badge": "¥1,980 / 月",
      "icon": "home"
    }
  ]
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountRadio(element, config, options); }
