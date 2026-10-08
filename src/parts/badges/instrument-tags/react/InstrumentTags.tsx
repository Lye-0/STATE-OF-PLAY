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
/** 計器の小さな表示片。文字と件数を独立した二つの面へ分け、選択時の点灯を小区画に留める。 */
export default forwardRef<HTMLDivElement, InstrumentTagsProps>(function InstrumentTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
