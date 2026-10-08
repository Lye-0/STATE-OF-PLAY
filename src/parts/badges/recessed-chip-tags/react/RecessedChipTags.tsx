'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-chip-tags",
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
export type RecessedChipTagsProps = FoundationProps;
/** 始端の大きい指の切欠きから、凹む読む床へつながる成形チップ。普通の淡青の角丸札と数値の箱を廃し、半径18pxの真の切欠き、奥へ下がる6px/7pxの壁と、異なる24px/34pxの終端曲面を作る。読む文字は36px内側の平床へ置き、選択時も床の輪郭を変えない。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。 */
export default forwardRef<HTMLDivElement, RecessedChipTagsProps>(function RecessedChipTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
