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
/** 対角の丸みを持つ二枚の布を、ずらして縫い合わせた通知。細いステッチ線だけの箱を廃止し、上布を左上、下布を右下へ20/18pxずらす。上布の6pxの折返し・四辺の実縫い代と、下布の露出した織り目を分け、記号とcloseを布の丸い留め位置へ揃える。読む文字とnative操作は上布へ固定する。 */
export default forwardRef<HTMLDivElement, StitchedNoteNoticeProps>(function StitchedNoteNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
