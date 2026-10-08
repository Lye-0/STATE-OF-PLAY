'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "dispatch-strip-notice",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type DispatchStripNoticeProps = FoundationProps;
/** 縦の配送テープの巻胴から、通知の紙帯を引き出すデザイン。標準通知の下線を廃止し、60pxの楕円端を持つ巻胴と、25px重なる読む帯、右の実裁断端を作る。通知記号を巻胴の中、本文と操作を帯へ固定し、closeと読みの幅を守る。 */
export default forwardRef<HTMLDivElement, DispatchStripNoticeProps>(function DispatchStripNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
