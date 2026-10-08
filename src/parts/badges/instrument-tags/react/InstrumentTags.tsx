'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "instrument-tags",
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
export type InstrumentTagsProps = FoundationProps;
/** 実件数を独立した計器面として読むタグ。元の数値面の区別を保持し、極細の下線と立体数値の不整合を一つの成形された読む床へ揃える。全札に4pxの上面と7pxの下の素材面を揃え、件数欄は厚さ2pxの実隔壁で分ける。名称も件数も同じ材料の平面に固定し、任意の長さを折返せる。狭い表示では名称を全幅の上段へ、実件数と削除を下段へ分け、長い名称の読む幅を保つ。 */
export default forwardRef<HTMLDivElement, InstrumentTagsProps>(function InstrumentTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
