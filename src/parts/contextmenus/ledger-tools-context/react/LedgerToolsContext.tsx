'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerToolsContextProps };
/** 帳簿の一冊に対する操作。記号・名称・キーを列へ揃え、削除を二重罫の後へ分ける。 */
export default function LedgerToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-tools-context" />;
}
