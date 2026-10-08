'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderHint, mountHint} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "bookend-note-hint",
  "kind": "hints",
  "variant": "essential",
  "label": "詳しく見る",
  "description": "",
  "defaultValue": null,
  "interactive": true,
  "content": "必要な情報を、必要な場所に。選択の前に、意図と使い方を確認できます。"
};
export type BookendNoteHintProps = FoundationProps;
/** 一つの深いL形ブックエンドへ、読む紙束を収める補足表示。左の茶色線を廃し、28pxの三面の立板と、手前へ36px出る斜め小口の底足を作る。紙束は立板へ4px重なり、底足に接して立つ。文字とnativeチェック/適用を紙束へ固定し、底足を操作のように描かない。 */
export default forwardRef<HTMLDivElement, BookendNoteHintProps>(function BookendNoteHint(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderHint} mountContent={mountHint}/>;
});
