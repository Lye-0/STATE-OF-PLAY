'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RibbonFileContextProps };
/** 書類に掛けた帯から操作を選ぶ。 */
export default function RibbonFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ribbon-file-context" />;
}
