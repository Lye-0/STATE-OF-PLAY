'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "drafting-note-tags",
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
export type DraftingNoteTagsProps = FoundationProps;
/** 一つのT横尺へ、両端を斜めに裁断した実名称の読む紙を渡す製図タグ。紙を囲むC支持・円の切欠きを廃し、幅16pxの縦尺と高さ16pxの横尺が交差する一つの開いた主形へ変える。紙の上辺は横尺の裏へ12px接触し、紙の斜めの自由端と尺の下端を別々に露出する。全文は左56px/上44pxの内側で読む。RTLでは物理的な輪郭を一度だけ鏡映する。狭幅は全文/件数・削除の二段にする。 */
export default forwardRef<HTMLDivElement, DraftingNoteTagsProps>(function DraftingNoteTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
