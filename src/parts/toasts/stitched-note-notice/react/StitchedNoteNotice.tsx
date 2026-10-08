'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-note-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type StitchedNoteNoticeProps = FoundationProps;
/** 縫い込んだメッセージ札。本文の周囲にだけ縫い目を置き、操作は別の小さなラベルへ。 */
export default forwardRef<HTMLDivElement, StitchedNoteNoticeProps>(function StitchedNoteNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
