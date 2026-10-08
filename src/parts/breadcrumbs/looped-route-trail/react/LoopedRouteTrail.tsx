'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "looped-route-trail",
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
export type LoopedRouteTrailProps = FoundationProps;
/** 一つの連続した二重のループ材が、実祖先の経路から現在の読む端子を保持するパンくず。普通のピンクのリンク列を廃し、64px幅の上下の本物の空隙と、現在の紙の裏へ12px入る60pxの渡りを作る。文字は76px内側へ置き、ループの輪郭と交点へ重ねない。値や階層を輪の進捗として捏造せず、全体の高さだけを実階層に合わせる。 */
export default forwardRef<HTMLDivElement, LoopedRouteTrailProps>(function LoopedRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
