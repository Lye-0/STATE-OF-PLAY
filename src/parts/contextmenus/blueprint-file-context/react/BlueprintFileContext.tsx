'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BlueprintFileContextProps };
/** 設計資料の注記から操作を開く。 */
export default function BlueprintFileContext(props:ContextProps) {
 return <ContextView {...props} skin="blueprint-file-context" />;
}
