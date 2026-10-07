'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as PlainDocumentContextProps };
/** 書類の基本的な操作メニュー。 */
export default function PlainDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="plain-document-context" />;
}
