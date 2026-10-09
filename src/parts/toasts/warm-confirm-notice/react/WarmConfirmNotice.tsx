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
/** 結果の見出しと説明を揃え、必要な次の操作を点線の下へ置く簡潔な通知。状態の意味は呼び出し側の内容に従う。 */
export default forwardRef<HTMLDivElement, WarmConfirmNoticeProps>(function WarmConfirmNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
