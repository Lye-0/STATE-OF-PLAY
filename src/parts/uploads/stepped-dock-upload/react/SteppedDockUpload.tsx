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
/** 二段の搬入ドック。ファイルを置く面の下に受け段を設け、追加済みの行をその段へ接続。 */
export default forwardRef<HTMLDivElement, SteppedDockUploadProps>(function SteppedDockUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
