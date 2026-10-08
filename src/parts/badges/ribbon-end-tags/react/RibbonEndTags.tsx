'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ribbon-end-tags",
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
export type RibbonEndTagsProps = FoundationProps;
/** 短いリボンの分類片。折り返しを左端に限定し、選択で帯の上辺が濃くなる。 */
export default forwardRef<HTMLDivElement, RibbonEndTagsProps>(function RibbonEndTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
