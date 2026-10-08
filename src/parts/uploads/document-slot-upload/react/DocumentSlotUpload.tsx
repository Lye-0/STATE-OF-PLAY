'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "document-slot-upload",
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
export type DocumentSlotUploadProps = FoundationProps;
/** 中空の横長挿入口へ、実際の選択操作を載せた書類面を差すファイル選択。薄い上線を撤去し、58px高の開いた受け口と、42pxから始まる書類面を接続する。書類が下の受唇へ10px重なり、空いた入口と読む面を明確に分ける。全書類面をnativeファイル選択の同じ操作範囲へ接続し、表示用の偽ボタンを置かない。 */
export default forwardRef<HTMLDivElement, DocumentSlotUploadProps>(function DocumentSlotUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
