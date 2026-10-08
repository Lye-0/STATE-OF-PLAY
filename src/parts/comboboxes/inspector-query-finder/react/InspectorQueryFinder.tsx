'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderCombobox, mountCombobox} from '../../../../shared/foundation/combobox';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "inspector-query-finder",
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
export type InspectorQueryFinderProps = FoundationProps;
/** 固定した三面の基準軸へ、候補ごとの目盛りの梁と一つの顎を差す照合入力。方眼と左右C括弧を廃止し、左の14pxの固定軸、軸へ10px接続する水平の目盛り梁、右の34px高の読み取り顎を作る。activeは照合する顎を明示し、確定checkは同じ顎の内側に固定、本文とcaretは動かさない。 */
export default forwardRef<HTMLDivElement, InspectorQueryFinderProps>(function InspectorQueryFinder(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderCombobox} mountContent={mountCombobox}/>;
});
