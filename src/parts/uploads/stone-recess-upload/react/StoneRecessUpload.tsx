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
/** 石に彫った収納窓。内側へ落ちる影を浅くし、記号と本文はくぼみの中心へ揃える。 */
export default forwardRef<HTMLDivElement, StoneRecessUploadProps>(function StoneRecessUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
