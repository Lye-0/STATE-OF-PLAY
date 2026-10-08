'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-grid-finder",
  "kind": "comboboxes",
  "variant": "essential",
  "label": "次の素材を見つける",
  "description": "",
  "defaultValue": "",
  "multiple": false,
  "placeholder": "名前や素材を入力…",
  "items": [
    {
      "value": "aurora",
      "label": "Aurora",
      "description": "光と透明感のコレクション",
      "badge": "GLASS",
      "icon": "spark"
    },
    {
      "value": "folio",
      "label": "Folio",
      "description": "紙と余白のコレクション",
      "badge": "PAPER",
      "icon": "file"
    },
    {
      "value": "mercury",
      "label": "Mercury",
      "description": "金属と精密さのコレクション",
      "badge": "METAL",
      "icon": "clock"
    },
    {
      "value": "quiet",
      "label": "Quiet",
      "description": "落ち着いた日常のデザイン",
      "badge": "ESSENTIAL",
      "icon": "info"
    },
    {
      "value": "archive",
      "label": "Archive",
      "description": "近日公開",
      "badge": "SOON",
      "disabled": true,
      "icon": "file"
    }
  ]
};
export type OpenGridFinderProps = FoundationProps;
/** 空いている二つの角で候補を保持する、開いた索引グリッド入力。縦に長い通常の行を廃止し、対角の離れた二つのL形と、記号/名称/種類の三段を実2列グリッドへ配置する。候補面を箱で囲わず、狭幅は同じ順の1列へ戻す。文字はactiveで動かさない。 */
export default forwardRef<HTMLDivElement, OpenGridFinderProps>(function OpenGridFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
