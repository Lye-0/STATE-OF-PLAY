'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "dispatch-strip-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type DispatchStripNoticeProps = FoundationProps;
/** 配信の帯。通知記号を細い配送欄へ寄せ、本文・操作・残り時間を三つの役割に分ける。 */
export default forwardRef<HTMLDivElement, DispatchStripNoticeProps>(function DispatchStripNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
