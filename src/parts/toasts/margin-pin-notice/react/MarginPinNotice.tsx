'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "margin-pin-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type MarginPinNoticeProps = FoundationProps;
/** 余白の二つの切込みへ、大きいC形の留め線を通す通知。元の左のクリップを保持し、全高に応じる38px幅・4pxの留め線と、読む紙の二つの実横穴へ接続する。通知記号は留め具から離して本文の意味として表示し、本文と操作を固定する。 */
export default forwardRef<HTMLDivElement, MarginPinNoticeProps>(function MarginPinNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
