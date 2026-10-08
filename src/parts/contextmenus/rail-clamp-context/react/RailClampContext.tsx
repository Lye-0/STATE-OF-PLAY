'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailClampContextProps };
/** 書類を留めるレールクランプ。対象の左右を支え、操作一覧も同じ支柱に沿って整列する。 */
export default function RailClampContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-clamp-context" />;
}
