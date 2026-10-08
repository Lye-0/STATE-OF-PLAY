'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stepped-message-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type SteppedMessageNoticeProps = FoundationProps;
/** 見出し・補足・実操作の三段を、互いに12pxずつ進む低い石段へ印刷する通知。四角い記号と小さい線の案を廃止し、情報の三段それぞれに独立した面と小口を作る。段は実内容の高さに追随し、ボタンのない通知では三段目も出ない。文字や操作領域はhoverで動かさない。 */
export default forwardRef<HTMLDivElement, SteppedMessageNoticeProps>(function SteppedMessageNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
