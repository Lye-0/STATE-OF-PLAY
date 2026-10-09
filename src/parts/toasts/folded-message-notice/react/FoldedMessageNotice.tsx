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
/** 細い蛇腹の折り目で左右を支える通知。本文を覆う紙面を広く取り、狭い画面でも折り目へ文字を重ねない。 */
export default forwardRef<HTMLDivElement, FoldedMessageNoticeProps>(function FoldedMessageNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
