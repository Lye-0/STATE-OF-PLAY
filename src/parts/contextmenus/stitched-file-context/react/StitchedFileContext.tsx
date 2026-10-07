'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as StitchedFileContextProps };
/** 縫った外袋と実行項目を分ける。 */
export default function StitchedFileContext(props:ContextProps) {
 return <ContextView {...props} skin="stitched-file-context" />;
}
