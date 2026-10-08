'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "folio-band-upload",
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
export type FolioBandUploadProps = FoundationProps;
/** 露出した厚い背から、四つの中空の綴じ環を実際の紙孔へ通すファイル選択。平たい表紙と細い留め帯を廃止し、28pxの背、20pxの空隙、実紙面へ渡る72pxの環を作る。環の先端は紙面の孔へ入り、選択した実ファイルの行も同じ背へ個別の環で綴じる。文字と削除を綴じる余白から離し、RTLでも背と孔が同じ側へ移る。 */
export default forwardRef<HTMLDivElement, FolioBandUploadProps>(function FolioBandUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
