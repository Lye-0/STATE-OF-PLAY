'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "status-rail-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type StatusRailNoticeProps = FoundationProps;
/** 一本の立体レールへ、I形の保持台車で読む通知板を接続するデザイン。左線を14pxの三面軸へ作り直し、通知記号を載せる36×40pxの台車と、上下に張る8pxの保持足を作る。通知板は台車へ6px重なり、レールの両端は開いたまま残す。本文・close・actionは固定する。 */
export default forwardRef<HTMLDivElement, StatusRailNoticeProps>(function StatusRailNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
