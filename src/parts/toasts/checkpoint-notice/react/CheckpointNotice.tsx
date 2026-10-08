'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "checkpoint-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type CheckpointNoticeProps = FoundationProps;
/** 上の検査レールへ、二つの厚い腕で記号の検査札を留める通知。元の吊り札を保持し、34×40pxの札と左右4pxの支持腕を、上の5pxレールへ実接続する。本文側の下線は2pxの小口へ抑え、文字とnativeボタンを固定する。 */
export default forwardRef<HTMLDivElement, CheckpointNoticeProps>(function CheckpointNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
