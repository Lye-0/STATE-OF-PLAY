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
/** 長短二つの括弧で読み取り面を挟む通知。四隅の飾りではなく、左右の連続した支柱で本文の位置を示す。 */
export default forwardRef<HTMLDivElement, OpenBracketNoticeProps>(function OpenBracketNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
