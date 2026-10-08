'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-marker-trail",
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
export type OpenMarkerTrailProps = FoundationProps;
/** 実経路の始端と現在地そのものを、反対向きに開いた大きな折返しの読むマーカーへ組むパンくず。外側へ浮く二つの台形を廃し、祖先のリンクが72pxの始端の平らな折面を、現在名が94pxの反対向きの終端を占める構造にする。中間の実階層だけが幅4pxの連続した導線に沿う。斜めの端は文字から24px以上離し、短い経路や一階層でも全文と当たりを保持する。 */
export default forwardRef<HTMLDivElement, OpenMarkerTrailProps>(function OpenMarkerTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
