'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBadges, mountBadges} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "receipt-tags",
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
export type ReceiptTagsProps = FoundationProps;
/** 分類の実ラベルと実件数を、小さな独立した受領紙へ配置するタグ。黄色い箱の下線を廃し、縦に読む紙の上段へ名称、下段へ実件数、8pxの真の切取り端を作る。デモの架空の総額や番号は追加せず、件数がない札は同じ紙の名前だけで成立する。選択は紙の色の密度で示し、文字やnative当たりを動かさない。 */
export default forwardRef<HTMLDivElement, ReceiptTagsProps>(function ReceiptTags(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBadges} mountContent={mountBadges}/>;
});
