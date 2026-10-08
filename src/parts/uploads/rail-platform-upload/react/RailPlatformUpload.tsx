'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "rail-platform-upload",
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
export type RailPlatformUploadProps = FoundationProps;
/** 二本の縦レールから、下の搬送床とファイル一覧へ接続するファイル選択。元のレールを保持し、5pxのレール端を30pxの床へ接地させ、下の選択済み一覧の側へ幅を揃える。無関係な長い線を減らし、床・レール・実ファイルの関係を一つの搬送面として読めるようにする。 */
export default forwardRef<HTMLDivElement, RailPlatformUploadProps>(function RailPlatformUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
