'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as StitchedFileContextProps };
/** 縫い目のある資料袋。対象を布の明面へ置き、操作は縫い目で区切った短いラベルとして開く。 */
export default function StitchedFileContext(props:ContextProps) {
 return <ContextView {...props} skin="stitched-file-context" />;
}
