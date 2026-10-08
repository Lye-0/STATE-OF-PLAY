'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "canvas-bin-upload",
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
export type CanvasBinUploadProps = FoundationProps;
/** キャンバス地の収納箱。角の補強と縫い目を外周に留め、指示文は大きい中央の空白へ置く。 */
export default forwardRef<HTMLDivElement, CanvasBinUploadProps>(function CanvasBinUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
