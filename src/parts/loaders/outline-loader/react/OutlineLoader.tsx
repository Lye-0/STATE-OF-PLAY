'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderLoader, mountLoader} from '../../../../shared/foundation/feedback';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "outline-loader",
  "kind": "loaders",
  "variant": "outline",
  "label": "静かな、制作時間。",
  "description": "",
  "defaultValue": null,
  "content": "読み込み中…"
};
export type OutlineLoaderProps = FoundationProps;
/** Outline Loader: Bタイプ。元の外観と、ネイティブ操作を保つ独立したDOM領域。 */
export default forwardRef<HTMLDivElement, OutlineLoaderProps>(function OutlineLoader(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderLoader} mountContent={mountLoader}/>;
});
