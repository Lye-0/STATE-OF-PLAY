'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "console-line-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type ConsoleLineNoticeProps = FoundationProps;
/** 凹んだ情報画面と、下端の操作行を持つ通知コンソール。背景のある表示面に状態を読み取り、追加操作を罫線で分ける。 */
export default forwardRef<HTMLDivElement, ConsoleLineNoticeProps>(function ConsoleLineNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
