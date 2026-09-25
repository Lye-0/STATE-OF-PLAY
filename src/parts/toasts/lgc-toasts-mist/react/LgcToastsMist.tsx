'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "lgc-toasts-mist",
  "kind": "toasts",
  "variant": "soft",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type LgcToastsMistProps = FoundationProps;
/** Mist Notice: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, LgcToastsMistProps>(function LgcToastsMist(props, ref) {
  return <FoundationWidget {...props} className={`lgc-root ${props.className??''}`} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
