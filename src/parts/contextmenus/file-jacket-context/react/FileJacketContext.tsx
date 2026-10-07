'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FileJacketContextProps };
/** ファイルの背から操作票を展開。 */
export default function FileJacketContext(props:ContextProps) {
 return <ContextView {...props} skin="file-jacket-context" />;
}
