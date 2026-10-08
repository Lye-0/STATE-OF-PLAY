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
/** 角括弧で受ける短いお知らせ。広い塗り面を減らし、本文の始点と終点にだけ支えを置く。 */
export default forwardRef<HTMLDivElement, OpenBracketNoticeProps>(function OpenBracketNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
