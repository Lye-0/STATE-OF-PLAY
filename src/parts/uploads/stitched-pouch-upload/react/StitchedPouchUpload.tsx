'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "stitched-pouch-upload",
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
export type StitchedPouchUploadProps = FoundationProps;
/** 開いた布袋の楕円の口を、横の引き紐で締めるファイル選択。紫の角丸面と細かい縫い目を廃止し、68pxの実開口、9pxの返し布と、左右へ抜ける紐を通す横面へ組み直す。袋本体は口の下14pxに重なり、文字とnative選択は袋の読む面へ固定する。 */
export default forwardRef<HTMLDivElement, StitchedPouchUploadProps>(function StitchedPouchUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
