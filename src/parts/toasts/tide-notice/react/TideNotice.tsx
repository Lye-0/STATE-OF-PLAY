'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/resonance/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "tide-notice",
  "kind": "toasts",
  "variant": "tide",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type TideNoticeProps = FoundationProps;
/** RESONANCE: presentation stays below real, editable input and live content. */
export default forwardRef<HTMLDivElement, TideNoticeProps>(function TideNotice(props, ref) {
  return <FoundationWidget {...props} className={`sop-resonance ${props.className ?? ''}`} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
