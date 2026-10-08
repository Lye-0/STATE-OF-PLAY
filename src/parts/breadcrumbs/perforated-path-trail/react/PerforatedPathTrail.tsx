'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perforated-path-trail",
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
export type PerforatedPathTrailProps = FoundationProps;
/** 実祖先から現在までの券片を、切取り口と細い残し紙で連続させるパンくず。各ラベルの右点線を廃止し、両側6pxの切欠きと4pxの紙小口、次の券へ届く16pxの残し紙を組む。券間12pxの実空隙へ、中央の残し紙が4pxずつ券の裏へ入り、関係のない黄色い矩形列にしない。全文は切欠きから18px離す。 */
export default forwardRef<HTMLDivElement, PerforatedPathTrailProps>(function PerforatedPathTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
