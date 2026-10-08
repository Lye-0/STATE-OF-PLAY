'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letter-rack-upload",
  "kind": "uploads",
  "variant": "essential",
  "label": "アイデアの素材を、ここに。",
  "description": "",
  "defaultValue": [],
  "multiple": true,
  "maxFiles": 4,
  "maxBytes": 10485760,
  "accept": ".png,.jpg,.webp,.txt,.pdf"
};
export type LetterRackUploadProps = FoundationProps;
/** 開いた前柵の三桟を、実書類の下の予約領域へ残すラック型のファイル選択。空の投入面とファイル一覧を同じ収納床へ置き、下110pxを84pxの中空前柵と10pxの接地面に確保する。書類が増えても三桟が底へ接続したまま残り、実名前とnative削除は柵の上へ固定する。 */
export default forwardRef<HTMLDivElement, LetterRackUploadProps>(function LetterRackUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
