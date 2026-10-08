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
/** 左右の曲率と通知記号の環を揃えた、信号カプセルの通知。元の丸い左端を保持し、右端も同じ40pxの曲面へ接続する。内側の上下の薄い切面と、二つの丸い操作面を同じ密度へ整え、本文とnative操作を固定する。 */
export default forwardRef<HTMLDivElement, SignalCapsuleNoticeProps>(function SignalCapsuleNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
