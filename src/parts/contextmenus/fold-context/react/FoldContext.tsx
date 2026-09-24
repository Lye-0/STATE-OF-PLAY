'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldContextProps };
/** 折り目を開く動きと、浅い紙の角を持つコンテキストメニュー。 */
export default function FoldContext(props:ContextProps) {
 return <ContextView {...props} skin="fold-context" />;
}
