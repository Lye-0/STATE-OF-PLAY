'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookmark-route-trail",
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
export type BookmarkRouteTrailProps = FoundationProps;
/** 実祖先の傍らから下がる一本の栞を、現在地の紙の縦の実スリットへ通すパンくず。離れていた紙を栞の裏側まで48px戻し、紙だけに幅8px・高さ36pxの切込みを設け、一本の帯がそこから見える。現在の全文は60px内側に確保する。帯の尾は紙の下へ38px続き20pxのVで終わる。二孔の飾り札や反復する糸綴じへ置換せず、祖先の傍らの帯が現在の紙を保持する一つの構造にする。 */
export default forwardRef<HTMLDivElement, BookmarkRouteTrailProps>(function BookmarkRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
