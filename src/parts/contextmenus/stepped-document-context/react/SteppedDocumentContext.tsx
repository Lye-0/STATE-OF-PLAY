'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SteppedDocumentContextProps };
/** 薄い書類が二段の台へ載る操作面。角丸の大きな塊を廃し、紙・下敷き・選択した操作段の厚みを揃える。 */
export default function SteppedDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="stepped-document-context" />;
}
