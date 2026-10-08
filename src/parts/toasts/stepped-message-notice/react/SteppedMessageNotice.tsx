'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stepped-message-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type SteppedMessageNoticeProps = FoundationProps;
/** 通知の内容と応答を二つの段に置く。閉じる操作を右上に保ち、下段へ進む視線を作る。 */
export default forwardRef<HTMLDivElement, SteppedMessageNoticeProps>(function SteppedMessageNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
