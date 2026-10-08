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
/** 本を束ねる帯へ資料を追加。外周の紙束と下の留め帯で置き場所を示し、選択後の票を下に連ねる。 */
export default forwardRef<HTMLDivElement, FolioBandUploadProps>(function FolioBandUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
