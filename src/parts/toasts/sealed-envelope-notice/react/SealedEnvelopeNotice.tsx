'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "sealed-envelope-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type SealedEnvelopeNoticeProps = FoundationProps;
/** 開封済みの封筒から届く通知。下の封筒口と右上の印を使い、内容そのものは平らに保つ。 */
export default forwardRef<HTMLDivElement, SealedEnvelopeNoticeProps>(function SealedEnvelopeNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
