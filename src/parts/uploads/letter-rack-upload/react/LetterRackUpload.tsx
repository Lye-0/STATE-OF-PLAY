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
/** 手紙を立てるラック。下の受けと二つの仕切りで収容場所を作り、中央の上向き記号で追加を伝える。 */
export default forwardRef<HTMLDivElement, LetterRackUploadProps>(function LetterRackUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
