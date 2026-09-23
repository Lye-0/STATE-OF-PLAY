'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/resonance/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "blueprint-notice",
  "kind": "toasts",
  "variant": "blueprint",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type BlueprintNoticeProps = FoundationProps;
/** RESONANCE: presentation stays below real, editable input and live content. */
export default forwardRef<HTMLDivElement, BlueprintNoticeProps>(function BlueprintNotice(props, ref) {
  return <FoundationWidget {...props} className={`sop-resonance ${props.className ?? ''}`} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
