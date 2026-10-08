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
/** 出力面と実操作の台面を別の実flowへ置く、制御卓の通知。固定66pxの台面を廃し、上の読面は見出しと本文のgrid行へ、台面は実actionボタンの全高へ追従させる。長い操作名でも台面が同じ高さへ伸び、上の面へ食い込まない。actionがない通知は読面だけにして、本文とnative操作を固定する。 */
export default forwardRef<HTMLDivElement, ConsoleLineNoticeProps>(function ConsoleLineNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
