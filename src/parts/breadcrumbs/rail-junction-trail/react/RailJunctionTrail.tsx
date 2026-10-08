'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "rail-junction-trail",
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
export type RailJunctionTrailProps = FoundationProps;
/** 祖先の駅を二本の連続した縦の線路へ載せ、省略階層の実操作だけが分岐線へ出るパンくず。バラバラの下線と丸い現在地を廃止し、全高へ続く二線、24pxの実停車床、途中階層へ分かれる実分岐、最後の広い終端ホームへ作り直す。階層順はnative DOMと上から下で一致させ、長い駅名もホームの内側で全文を読める。 */
export default forwardRef<HTMLDivElement, RailJunctionTrailProps>(function RailJunctionTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
