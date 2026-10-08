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
/** 選択札の始端を、一つの幅広い差込む旗へ整えるタグ。元の太い始端の分かりやすさを保持し、幅30pxの戻る旗と7pxの上面へ、14pxから始まる読む紙が16px入る。短い旗だけが貼られた矩形にせず、紙の6pxの小口と同じ差込みとして組む。狭い表示では名称を全幅上段、件数と削除を下段へ分ける。 */
export default forwardRef<HTMLDivElement, IndexFlagTagsProps>(function IndexFlagTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
