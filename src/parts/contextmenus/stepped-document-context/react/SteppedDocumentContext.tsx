'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SteppedDocumentContextProps };
/** 段を持つ書類台。対象の下の受け面と操作メニューの区画を分け、危険な操作を独立した段へ。 */
export default function SteppedDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="stepped-document-context" />;
}
