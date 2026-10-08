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
/** 上から閉じた大きいV形の蓋を、中央の封緘で留める通知。丸いピンクの標準通知を廃止し、全幅64pxの三角の実蓋、中央40pxの押印、下の6pxの封筒の小口へ再設計する。本文は封緘の下で読む面へ固定し、native closeと操作を明示する。 */
export default forwardRef<HTMLDivElement, SealedEnvelopeNoticeProps>(function SealedEnvelopeNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
