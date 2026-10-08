'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "console-route-trail",
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
export type ConsoleRouteTrailProps = FoundationProps;
/** 一本の計器の導体へ、実祖先と現在の端子面を順に接合するパンくず。厚い片丸の箱と浮く小楕円を廃し、16pxの通し導体、側へ張り出す38pxの台形の端子脚、18px角を落とした平らな読む端子へ組む。端子脚は導体へ8px、読む面へ10px入る。紙や縫布に似せず、6pxの上面と10pxの成形された金属の下面を分ける。各実階層は任意の高さへ伸び、文字は24pxの内側で固定する。 */
export default forwardRef<HTMLDivElement, ConsoleRouteTrailProps>(function ConsoleRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
