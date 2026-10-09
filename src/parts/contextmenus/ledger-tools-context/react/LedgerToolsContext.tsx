'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerToolsContextProps };
/** 左の帳簿線を一つの読み始めとして保持し、各分類の追加線を撤去する。分類は余白、実選択は一段だけ強い紙色と下罫で分ける。薄い通常罫と17pxの名称・14pxの説明で、元の整った帳簿を磨く。 */
export default function LedgerToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-tools-context" />;
}
