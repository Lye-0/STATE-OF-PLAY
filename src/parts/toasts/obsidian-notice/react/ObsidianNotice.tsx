'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderToast, mountToast} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "obsidian-notice",
  "kind": "toasts",
  "variant": "obsidian",
  "label": "知らせも、心地よく。",
  "description": "",
  "defaultValue": null
};
export type ObsidianNoticeProps = FoundationProps;
/** Obsidian Notice: Aタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, ObsidianNoticeProps>(function ObsidianNotice(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderToast} mountContent={mountToast}/>;
});
