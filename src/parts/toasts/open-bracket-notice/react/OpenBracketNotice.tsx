'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-bracket-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type OpenBracketNoticeProps = FoundationProps;
/** 四つの開いた角だけで、読む通知面を保持するデザイン。元の開いた枠を保持し、競合する記号下線を廃止する。角は28pxの長さ/5pxの太さへ揃え、紙を内側8pxに収める。本文の周りに長い枠線を足さず、文字とnative操作を固定する。 */
export default forwardRef<HTMLDivElement, OpenBracketNoticeProps>(function OpenBracketNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
