import {mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig, FoundationOptions} from '../../../../shared/foundation/core';
const config: FoundationConfig = {
  "id": "warm-library-finder",
  "kind": "comboboxes",
  "variant": "essential",
  "label": "ライブラリから選ぶ",
  "description": "",
  "defaultValue": "",
  "multiple": false,
  "placeholder": "書名や著者を入力…",
  "items": [
    {
      "value": "aurora",
      "label": "光と透明のかたち",
      "description": "Aurora 編集室 · 2025",
      "badge": "A-014",
      "icon": "file"
    },
    {
      "value": "folio",
      "label": "紙と余白のノート",
      "description": "Folio 編集室 · 2024",
      "badge": "B-028",
      "icon": "file"
    },
    {
      "value": "mercury",
      "label": "素材と構造の手帖",
      "description": "Mercury Lab · 2025",
      "badge": "C-006",
      "icon": "file"
    },
    {
      "value": "quiet",
      "label": "静かなデザイン",
      "description": "Quiet Office · 2023",
      "badge": "B-042",
      "icon": "file"
    },
    {
      "value": "archive",
      "label": "アーカイブ集",
      "description": "刊行準備中",
      "badge": "未刊",
      "disabled": true,
      "icon": "file"
    }
  ]
};
export function init(element: HTMLElement, options: FoundationOptions = {}) { return mountCombobox(element, config, options); }
