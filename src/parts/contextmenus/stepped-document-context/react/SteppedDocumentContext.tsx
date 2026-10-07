'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SteppedDocumentContextProps };
/** 段差のある文書に操作用の平面を追加。 */
export default function SteppedDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="stepped-document-context" />;
}
