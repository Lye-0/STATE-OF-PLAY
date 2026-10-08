'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "telegram-note",
  "kind": "toasts",
  "variant": "essential",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type TelegramNoteProps = FoundationProps;
/** 一つの電報の出力口から、切断した伝送帯を出す通知。切手に似た半円の紙端と点線を廃止し、60pxの角形の出力機と、深い6pxの出口へ4px重なる読む帯を作る。右の自由端は全高14pxの一つの斜め切断で示し、見出しの固定活字と本文と操作を帯へ載せる。 */
export default forwardRef<HTMLDivElement, TelegramNoteProps>(function TelegramNote(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
