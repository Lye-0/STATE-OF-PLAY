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
/** 信号のカプセル。左の丸いランプを通知の種類に結び付け、本文は横の静かな面へ置く。 */
export default forwardRef<HTMLDivElement, SignalCapsuleNoticeProps>(function SignalCapsuleNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
