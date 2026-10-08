'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-index-trail",
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
export type FoldedIndexTrailProps = FoundationProps;
/** 実階層を一枚の折る索引紙へ記すパンくず。交互の全面折紙を廃止し、幅36pxの一つの縦折面、斜めに立ち上がる始端、現在地の下の36pxの返す紙端へ再設計する。祖先も省略も現在も同じ平らな読む面へ置き、48pxの内側に全文を確保する。素材の輪郭だけを折り、文字・当たり・順序は動かさない。RTLでは紙全体を一度鏡映する。 */
export default forwardRef<HTMLDivElement, FoldedIndexTrailProps>(function FoldedIndexTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
