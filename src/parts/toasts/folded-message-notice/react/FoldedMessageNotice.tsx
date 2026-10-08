'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-message-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type FoldedMessageNoticeProps = FoundationProps;
/** 一枚の紙を三面に折り、左の翼で通知記号、中央で本文、右の翼で閉じる操作を受けるデザイン。面取りの二重額縁を廃止し、左右34pxの翼と中央の紙を、16pxの全高の斜めの返しで連続させる。読む面を囲う枠は置かず、文字とnativeヒットを水平に固定する。 */
export default forwardRef<HTMLDivElement, FoldedMessageNoticeProps>(function FoldedMessageNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
