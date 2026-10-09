'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
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
export type WarmLibraryFinderProps = FoundationProps;
/** Warm Library Finder: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, WarmLibraryFinderProps>(function WarmLibraryFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
