'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "inspection-pad-upload",
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
export type InspectionPadUploadProps = FoundationProps;
/** 左の支柱へ一つの検査梁を接続し、その下の受台で書類を確認するファイル選択。大きい空白面と短線を撤去し、24pxの三面の支柱・48pxの横梁・10pxの受台へ構成する。梁は支柱へ6px重なり、native選択は梁の下に固定する。ファイルの実名前・サイズは同じ受台の延長へ並ぶ。 */
export default forwardRef<HTMLDivElement, InspectionPadUploadProps>(function InspectionPadUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
