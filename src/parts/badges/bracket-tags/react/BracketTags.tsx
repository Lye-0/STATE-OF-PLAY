'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bracket-tags",
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
export type BracketTagsProps = FoundationProps;
/** 一つの大きな開いた支持括弧へ、平らな読む板を差すタグ。両端に細い括弧の記号を足す構成を廃止し、幅50pxの成形されたC支持、24%の上下の折る腕、そこへ20px重なる読む板を組む。括弧の内側には本当の空隙を残し、native名称は56pxの内側に固定する。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。 */
export default forwardRef<HTMLDivElement, BracketTagsProps>(function BracketTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
