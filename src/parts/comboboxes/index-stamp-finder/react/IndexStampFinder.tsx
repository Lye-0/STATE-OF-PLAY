'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "index-stamp-finder",
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
export type IndexStampFinderProps = FoundationProps;
/** 四辺を実際に抜いた索引切手へ、照合の印を添える候補入力。細い下線だけの票を廃し、4pxの抜きが16pxごとに並ぶ実輪郭と5pxの縁を全辺へ作る。検索口を同じ二重の押縁へ揃え、選択のcheckは右の押印位置に固定する。 */
export default forwardRef<HTMLDivElement, IndexStampFinderProps>(function IndexStampFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
