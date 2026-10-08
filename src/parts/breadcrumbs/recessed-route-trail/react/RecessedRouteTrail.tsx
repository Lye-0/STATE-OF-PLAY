'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "recessed-route-trail",
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
export type RecessedRouteTrailProps = FoundationProps;
/** 実階層を、両端が開いた一つの深い彫った溝へ置くパンくず。四辺の面取り枠を廃止し、左28pxと右52pxの異なる斜めの側壁が平らな読む床へ10px/16pxずつ入り、上端と下端を閉じない構造にする。右の広い斜面と外の端面が凹む深さを作り、祖先も現在も同じ床へ固定する。読む文字は左36px/右60pxの内側に確保し、RTLでは全溝を一度鏡映する。 */
export default forwardRef<HTMLDivElement, RecessedRouteTrailProps>(function RecessedRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
