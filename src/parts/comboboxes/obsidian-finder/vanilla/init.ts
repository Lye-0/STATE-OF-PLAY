import {mountCombobox} from '../../../../shared/foundation/resonance/controls';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "obsidian-finder",
  "kind": "comboboxes",
  "variant": "obsidian",
  "label": "次の素材を見つける",
  "description": "",
  "defaultValue": [
    "folio"
  ],
  "multiple": true,
  "placeholder": "名前や素材を入力…",
  "items": [
    {
      "value": "aurora",
      "label": "Aurora",
      "description": "光と透明感のコレクション",
      "badge": "GLASS"
    },
    {
      "value": "folio",
      "label": "Folio",
      "description": "紙と余白のコレクション",
      "badge": "PAPER"
    },
    {
      "value": "mercury",
      "label": "Mercury",
      "description": "金属と精密さのコレクション",
      "badge": "METAL"
    },
    {
      "value": "quiet",
      "label": "Quiet",
      "description": "落ち着いた日常のデザイン",
      "badge": "ESSENTIAL"
    },
    {
      "value": "archive",
      "label": "Archive",
      "description": "近日公開",
      "badge": "SOON",
      "disabled": true
    }
  ]
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountCombobox(element, config, options); }
