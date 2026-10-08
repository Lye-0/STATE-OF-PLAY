'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stone-recess-upload",
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
export type StoneRecessUploadProps = FoundationProps;
/** 斜めの石板を切り込んだ、深い平底のファイル受面。淡緑の標準角丸枠を廃止し、34pxずれた四辺の実石板と、30/38pxの上下肉厚を残す内側の切込みへ変更する。内面は上の暗い切断面と下の淡い受面を持ち、中央の固定文字を斜めに変形させずに表示する。 */
export default forwardRef<HTMLDivElement, StoneRecessUploadProps>(function StoneRecessUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
