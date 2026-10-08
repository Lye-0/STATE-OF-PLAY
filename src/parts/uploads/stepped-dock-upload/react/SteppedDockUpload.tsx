'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stepped-dock-upload",
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
export type SteppedDockUploadProps = FoundationProps;
/** 二段の低い搬入床を、短い位置決めガイドへ合わせるファイル選択。元の低い段差を保持し、競合する全周の外枠を撤去する。66pxの短いガイドと6pxの受面、4pxの床小口と8pxの下段を揃え、文字の操作面を広く確保する。 */
export default forwardRef<HTMLDivElement, SteppedDockUploadProps>(function SteppedDockUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
