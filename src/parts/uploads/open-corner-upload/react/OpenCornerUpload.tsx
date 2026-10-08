'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "open-corner-upload",
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
export type OpenCornerUploadProps = FoundationProps;
/** 対角の二つの開いた角だけで受け面を示すファイル選択。元の開角を保持し、薄い線を4px幅/48pxの長さへ揃え、実際に開いた領域を広く保つ。ドラッグでは角の色だけを変え、文字・記号・native選択の操作範囲を縮めない。 */
export default forwardRef<HTMLDivElement, OpenCornerUploadProps>(function OpenCornerUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
