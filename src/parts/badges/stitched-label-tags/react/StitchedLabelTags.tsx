'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-label-tags",
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
export type StitchedLabelTagsProps = FoundationProps;
/** 一枚の織布を、長い上辺の立ち上がった開いた縫い代と、平らに垂れる読む布へ組むタグ。端の孔・裏のC帯を廃止する。38pxの長い袖の断面には高さ10pxの実空隙があり、下の読む布へ6px続く。読む布の下は片方だけ10px切れた生の布端と8pxの縫った小口。全文は縫い代から48px下へ置き、選択では同じ布の密度だけを変える。狭幅は全文/件数・削除の二段にする。 */
export default forwardRef<HTMLDivElement, StitchedLabelTagsProps>(function StitchedLabelTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
