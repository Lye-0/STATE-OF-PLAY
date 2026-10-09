'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "soft-contact-finder",
  "kind": "comboboxes",
  "variant": "essential",
  "label": "連絡先を探す",
  "description": "",
  "defaultValue": "",
  "multiple": false,
  "placeholder": "チーム名や連絡先を入力…",
  "items": [
    {
      "value": "aurora",
      "label": "Aurora Studio",
      "description": "制作 · hello@aurora.example",
      "badge": "GLASS",
      "icon": "spark"
    },
    {
      "value": "folio",
      "label": "Folio Works",
      "description": "編集 · contact@folio.example",
      "badge": "PAPER",
      "icon": "file"
    },
    {
      "value": "mercury",
      "label": "Mercury Lab",
      "description": "開発 · team@mercury.example",
      "badge": "METAL",
      "icon": "clock"
    },
    {
      "value": "quiet",
      "label": "Quiet Office",
      "description": "運営 · office@quiet.example",
      "badge": "ESSENTIAL",
      "icon": "info"
    },
    {
      "value": "archive",
      "label": "Archive Team",
      "description": "現在は選択できません",
      "badge": "SOON",
      "disabled": true,
      "icon": "file"
    }
  ]
};
export type SoftContactFinderProps = FoundationProps;
/** Soft Contact Finder: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, SoftContactFinderProps>(function SoftContactFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
