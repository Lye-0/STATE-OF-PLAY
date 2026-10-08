'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "archive-route-trail",
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
export type ArchiveRouteTrailProps = FoundationProps;
/** 一枚の収蔵票の上部へ祖先の経路を記し、罫を一つ越えて実現在地の大きな見出しへ降りるパンくず。元の別段の現在地を保持し、短い飾り線を廃して、6pxの紙束小口と9pxの貼り背、連続した祖先の斜線と一枚の紙面へ整える。省略階層の実メニューも同じ票の左背を持ち、長い見出しは全文を折り返す。 */
export default forwardRef<HTMLDivElement, ArchiveRouteTrailProps>(function ArchiveRouteTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
