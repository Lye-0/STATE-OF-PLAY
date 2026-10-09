'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SteppedDocumentContextProps };
/** 元の書類台の段を保ち、厚い白札の反復を廃止する。分類の6px段と実フォーカスの選択段だけを残し、通常の行は一枚の淡い紙へ戻す。native操作44px、実名称17pxと説明14pxで操作の余白を確保する。 */
export default function SteppedDocumentContext(props:ContextProps) {
 return <ContextView {...props} skin="stepped-document-context" />;
}
