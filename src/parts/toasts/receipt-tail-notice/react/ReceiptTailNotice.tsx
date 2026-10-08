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
/** ゆとりのある紙端と、発行見出しの階層を持つレシート通知。元の下の紙端を保持し、抜きは24px間隔の3pxへ抑える。上の発行口の二重線、固定した見出しと補足、操作前の14pxの空間を揃え、細かいギザギザと窮屈さを整理する。 */
export default forwardRef<HTMLDivElement, ReceiptTailNoticeProps>(function ReceiptTailNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
