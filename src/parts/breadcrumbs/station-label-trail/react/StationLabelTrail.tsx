'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "station-label-trail",
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
export type StationLabelTrailProps = FoundationProps;
/** 深い紺の駅名板の側柱へ、実祖先の停車目盛と現在の大きい終端表示を接続するパンくず。元の紺の縦経路を保持し、弱い小四角と極細線を38pxの実停車床/10pxの共通柱/明るい現在の表示面へまとめる。文字は停車床から離れた固定面へ置き、折返しても階層順と全文を保つ。 */
export default forwardRef<HTMLDivElement, StationLabelTrailProps>(function StationLabelTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
