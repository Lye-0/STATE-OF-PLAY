'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "index-flag-tags",
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
export type IndexFlagTagsProps = FoundationProps;
/** 索引の旗札。色の端を短い旗にして分類を見つけやすくし、文字と削除は長方形の中へ保つ。 */
export default forwardRef<HTMLDivElement, IndexFlagTagsProps>(function IndexFlagTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
