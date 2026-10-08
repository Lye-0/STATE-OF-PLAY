'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderUpload, mountUpload} from '../../../../shared/foundation/upload';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "canvas-bin-upload",
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
export type CanvasBinUploadProps = FoundationProps;
/** 二つの別々の中空の持ち手を、厚い布容器へ縫い留めるファイル選択。薄い黄色枠と四角い記号を撤去し、38px幅/112px高の二つの実持ち手と、82pxから始まる側折り12pxの容器を作る。持ち手は容器へ30px重なり、文字とnative操作を持ち手から離れた布面へ固定する。 */
export default forwardRef<HTMLDivElement, CanvasBinUploadProps>(function CanvasBinUpload(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderUpload} mountContent={mountUpload}/>;
});
