'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FileJacketContextProps };
/** 資料の表紙に操作札を差し込む。 */
export default function FileJacketContext(props:ContextProps) {
 return <ContextView {...props} skin="file-jacket-context" />;
}
