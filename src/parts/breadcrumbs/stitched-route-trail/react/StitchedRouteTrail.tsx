'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-route-trail",
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
export type StitchedRouteTrailProps = FoundationProps;
/** 一本の幅広い縫い帯へ、実階層を記す織布の読む片を通すパンくず。点線の下線を廃し、幅12pxの通し帯と、各布片の13pxの縫う切込み、その裏を回る28pxの折返しへ組み直す。帯は縦へ続き、布片の間の実空隙でも途切れない。縫合は文字から離れた32pxの余白で行い、現在も同じ布の読む面で示す。 */
export default forwardRef<HTMLDivElement, StitchedRouteTrailProps>(function StitchedRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
