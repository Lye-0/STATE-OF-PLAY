'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "perforated-upload",
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
export type PerforatedUploadProps = FoundationProps;
/** 右の切取り片を、実際の14pxの隙間で切り離すファイル選択。下の点線を廃止し、紙の両側に相対する半円の穿孔を作り、読む紙面と細い切取り片を分ける。選択済みファイルも名前の紙とnative削除の切取り片へ分かれ、装飾の穿孔を削除操作の場所へ結び付ける。 */
export default forwardRef<HTMLDivElement, PerforatedUploadProps>(function PerforatedUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
