'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "warm-confirm-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type WarmConfirmNoticeProps = FoundationProps;
/** 温かい確認色と抑えた影で、実操作の結果を示す汎用通知。既存の暖色と角丸を維持し、浮きすぎる下影を2px/8pxへ抑える。見出し14px・補足12px・操作の最小34pxで、長い通知も読みやすく表示する。 */
export default forwardRef<HTMLDivElement, WarmConfirmNoticeProps>(function WarmConfirmNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
