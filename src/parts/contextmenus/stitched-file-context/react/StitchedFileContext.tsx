'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as StitchedFileContextProps };
/** 布貼りの書類フォルダー。 */
export default function StitchedFileContext(props:ContextProps) {
 return <ContextView {...props} skin="stitched-file-context" />;
}
