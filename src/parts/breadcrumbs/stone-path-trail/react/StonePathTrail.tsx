'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-path-trail",
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
export type StonePathTrailProps = FoundationProps;
/** 縦の階層を、丸く磨耗した石の読む床へ一つずつ載せるパンくず。元の縦経路の明快さを保持し、普通の淡緑の矩形を34pxの対角の曲面と実上下面へ整える。幅6pxの通しの道と各16pxの渡りが石へ4px入って接合し、板状のファイルツリーに見立てない。文字は磨いた平底の22px内側で読む。 */
export default forwardRef<HTMLDivElement, StonePathTrailProps>(function StonePathTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
