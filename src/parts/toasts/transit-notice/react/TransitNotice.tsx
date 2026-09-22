'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
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
/** Transit Notice: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, TransitNoticeProps>(function TransitNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
