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
/** 装置の経路表示。親から現在地へ点灯する順序を、明確な矢印と別面の終端で示す。 */
export default forwardRef<HTMLDivElement, ConsoleRouteTrailProps>(function ConsoleRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
