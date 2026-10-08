'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "porcelain-tray-finder",
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
export type PorcelainTrayFinderProps = FoundationProps;
/** 二つの大きい楕円の持ち手へ、八角の浅い磁器トレーを接続する候補入力。角丸パネルと小側孔を廃止し、26pxの四つの斜め角、外へ40px張り出す84px高の握り輪、手前10pxの小口を主外形にする。持ち手の穴を読面で塞がず、候補は中央の一つの凹面へ固定する。 */
export default forwardRef<HTMLDivElement, PorcelainTrayFinderProps>(function PorcelainTrayFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
