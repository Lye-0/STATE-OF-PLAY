'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerToolsContextProps };
/** 綴じた台帳に対象と操作を記録するメニュー。背・連番欄・名称と補足の記入欄を分け、どの記録を選んでも罫と文字の位置を固定する。 */
export default function LedgerToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-tools-context" />;
}
