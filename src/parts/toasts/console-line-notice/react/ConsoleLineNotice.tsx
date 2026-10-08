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
/** コンソールの応答行。状態記号を左の区画、通知本文を中央、閉じる操作を右端に分離する。 */
export default forwardRef<HTMLDivElement, ConsoleLineNoticeProps>(function ConsoleLineNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
