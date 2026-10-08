'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "outline-filter-tags",
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
export type OutlineFilterTagsProps = FoundationProps;
/** 選択をnativeチェックと明るい青の面で一目で確認できる実用タグ。薄い緑枠と淡い状態差を、同じ寸法の灰青の輪郭、選択時の青い読む面、実checkboxの確定状態へ揃える。装飾を増やさず、名称・実件数・削除の操作が導入先でも使えるBに整える。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。 */
export default forwardRef<HTMLDivElement, OutlineFilterTagsProps>(function OutlineFilterTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
