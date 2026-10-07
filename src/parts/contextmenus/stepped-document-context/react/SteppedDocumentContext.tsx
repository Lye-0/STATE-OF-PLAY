'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SteppedDocumentContextProps };
/** 段を持つ書類置き場から操作。 */
export default function SteppedDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="stepped-document-context" />;
}
