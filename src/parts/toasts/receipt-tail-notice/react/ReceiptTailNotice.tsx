'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "receipt-tail-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type ReceiptTailNoticeProps = FoundationProps;
/** 受領票のような通知。処理結果を本文、再操作を下の控えへ分け、ミシン目をその境界に置く。 */
export default forwardRef<HTMLDivElement, ReceiptTailNoticeProps>(function ReceiptTailNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
