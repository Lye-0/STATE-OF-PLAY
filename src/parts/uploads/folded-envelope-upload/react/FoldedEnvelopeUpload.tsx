'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folded-envelope-upload",
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
export type FoldedEnvelopeUploadProps = FoundationProps;
/** 上下の浅い非対称折り返しへ、書類を受ける封筒型ファイル選択。元の上下折り形を保持し、厚い斜めの重なりを34/36pxの正確な面へ整理する。上42%と下62%の折り端を本文から離し、読む面と実ファイル一覧の幅を揃える。 */
export default forwardRef<HTMLDivElement, FoldedEnvelopeUploadProps>(function FoldedEnvelopeUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
