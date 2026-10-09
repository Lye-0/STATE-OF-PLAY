'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "signal-capsule-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type SignalCapsuleNoticeProps = FoundationProps;
/** 丸い信号端子と薄い読み取り面を接続した通知。状態の記号を端子へ収め、本文と操作は無地の面へ置く。 */
export default forwardRef<HTMLDivElement, SignalCapsuleNoticeProps>(function SignalCapsuleNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
