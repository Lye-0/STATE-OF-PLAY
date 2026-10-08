'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "embossed-label-tags",
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
export type EmbossedLabelTagsProps = FoundationProps;
/** 実名称を上の読む橋、実件数と削除を下の鋳弓へ置く、一体の鋳造の弓形タグ。厚い角丸チップを廃し、左右16pxの支柱と丸く返る64pxの下の鋳面へ、名称の平らな橋が接する。二つの読む位置の間には30px以上の本当の空隙を開ける。任意の長い名称が上の橋を伸ばし、実件数と削除は下の素材面に固定する。選択で輪郭/文字位置は動かない。 */
export default forwardRef<HTMLDivElement, EmbossedLabelTagsProps>(function EmbossedLabelTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
