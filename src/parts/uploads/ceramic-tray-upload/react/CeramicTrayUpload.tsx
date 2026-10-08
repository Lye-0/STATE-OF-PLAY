'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "ceramic-tray-upload",
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
export type CeramicTrayUploadProps = FoundationProps;
/** 広い平底と手前の浅い曲面が、選んだ書類を一つの器で受ける陶製ファイル選択。切れた角丸の四辺枠と小脚を撤去し、投入面からファイル一覧まで連続した底面を作る。手前64pxは上の受唇・曲面・10pxの接地面で構成し、件数が増えると器全体が伸びる。文字とnative削除は曲面から離れた底面へ固定する。 */
export default forwardRef<HTMLDivElement, CeramicTrayUploadProps>(function CeramicTrayUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
