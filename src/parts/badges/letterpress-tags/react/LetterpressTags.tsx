'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letterpress-tags",
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
export type LetterpressTagsProps = FoundationProps;
/** 強い活字と小さな実件数を、薄い一枚の分類票へ整えるタグ。元の文字と罫の明快な関係を保持し、下端の黒い密度を2pxの素材の小口へ減らし、上の1pxの罫と右の件数の一線で読む面を分ける。選択で線を増やさず同じ面の密度を変える。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。 */
export default forwardRef<HTMLDivElement, LetterpressTagsProps>(function LetterpressTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
