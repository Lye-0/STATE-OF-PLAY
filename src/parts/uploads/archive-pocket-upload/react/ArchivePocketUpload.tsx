'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "archive-pocket-upload",
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
export type ArchivePocketUploadProps = FoundationProps;
/** 一つの厚みのある収納ポケットへ、選んだファイルを収めるファイル選択。分離した二つの黄色い箱を撤去し、26pxの側面の蛇腹と96pxの前壁、中央が22px下がった実取り出し口へまとめる。読む操作は口の上に固定し、選択したファイルの一覧は前壁へ入り、件数に応じてポケットの下部が伸びる。 */
export default forwardRef<HTMLDivElement, ArchivePocketUploadProps>(function ArchivePocketUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
