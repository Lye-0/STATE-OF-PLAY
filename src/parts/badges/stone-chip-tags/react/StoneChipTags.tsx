'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-chip-tags",
  "kind": "badges",
  "variant": "essential",
  "label": "小さな情報に、個性を。",
  "description": "",
  "defaultValue": [
    "ready"
  ],
  "selectable": true,
  "removable": false,
  "items": [
    {
      "value": "design",
      "label": "Design",
      "badge": "8",
      "icon": "spark"
    },
    {
      "value": "motion",
      "label": "Motion",
      "badge": "4",
      "icon": "clock"
    },
    {
      "value": "ready",
      "label": "Ready",
      "icon": "check"
    },
    {
      "value": "review",
      "label": "Review",
      "icon": "info"
    }
  ]
};
export type StoneChipTagsProps = FoundationProps;
/** 実ラベルの長さに合わせて伸びる、割れた石片のタグ。淡緑の角丸矩形を廃し、14pxの欠けた始端と左右で異なる斜めの破断、16pxの側断面、10pxの下の素材面へ変える。文字は破断面から28px内側の磨いた中央で読む。選択では素材の密度を変え、件数と値を石の割れへ重ねない。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。 */
export default forwardRef<HTMLDivElement, StoneChipTagsProps>(function StoneChipTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
