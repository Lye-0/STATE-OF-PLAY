'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "plain-status-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type PlainStatusNoticeProps = FoundationProps;
/** 小さな影と読みやすい本文で、操作結果を端正に示す汎用通知。既存の中立色と5pxの角丸を維持し、影を2px/8pxへ抑える。見出し14px・補足12px・実操作の最小34pxを揃え、320pxの長文を自然に折り返す。 */
export default forwardRef<HTMLDivElement, PlainStatusNoticeProps>(function PlainStatusNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
