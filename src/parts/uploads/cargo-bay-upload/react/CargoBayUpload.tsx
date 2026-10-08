'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "cargo-bay-upload",
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
export type CargoBayUploadProps = FoundationProps;
/** 対向する二つの搬入口の支柱を、下の実床へ接続するファイル選択。元の開いた括弧を保持し、18px幅/6pxの支柱と12pxの床へ寸法を揃える。支柱は床へ4px重なり、選択後のファイル一覧は床の延長へ連続する。文字とnative操作範囲は開閉やドラッグで動かさない。 */
export default forwardRef<HTMLDivElement, CargoBayUploadProps>(function CargoBayUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
