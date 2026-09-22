'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "inset-dropzone",
  "kind": "uploads",
  "variant": "inset",
  "label": "アイデアの素材を、ここに。",
  "description": "",
  "defaultValue": [],
  "multiple": true,
  "maxFiles": 4,
  "maxBytes": 10485760,
  "accept": ".png,.jpg,.webp,.txt,.pdf"
};
export type InsetDropzoneProps = FoundationProps;
/** Inset Dropzone: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, InsetDropzoneProps>(function InsetDropzone(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
