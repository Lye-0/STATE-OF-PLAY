'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/resonance/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "transit-notice",
  "kind": "toasts",
  "variant": "transit",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type TransitNoticeProps = FoundationProps;
/** RESONANCE: presentation stays below real, editable input and live content. */
export default forwardRef<HTMLDivElement, TransitNoticeProps>(function TransitNotice(props, ref) {
  return <FoundationWidget {...props} className={`sop-resonance ${props.className ?? ''}`} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
