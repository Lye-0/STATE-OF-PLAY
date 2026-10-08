'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ledger-margin-trail",
  "kind": "breadcrumbs",
  "variant": "essential",
  "label": "あなたが、いまいる場所。",
  "description": "",
  "defaultValue": null,
  "items": [
    {
      "value": "home",
      "label": "Home",
      "href": "#home"
    },
    {
      "value": "library",
      "label": "Library",
      "href": "#library"
    },
    {
      "value": "objects",
      "label": "Objects",
      "href": "#objects"
    },
    {
      "value": "materials",
      "label": "Materials",
      "href": "#materials"
    },
    {
      "value": "paper",
      "label": "Paper"
    }
  ]
};
export type LedgerMarginTrailProps = FoundationProps;
/** 帳簿の通し罫から、実階層の字下げへ短い受け罫を渡すパンくず。元の段階的な字下げを保持し、線が文字から離れる不整合を修正する。各12pxの字下げへ、同じ起点10pxから伸びる罫が文字の8px手前まで続く。細い二本の通し罫と一枚の読む紙で精度を作り、現在地は同じ紙の見出しとして読む。 */
export default forwardRef<HTMLDivElement, LedgerMarginTrailProps>(function LedgerMarginTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
