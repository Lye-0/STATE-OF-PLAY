'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerToolsContextProps };
/** 台帳の欄とショートカットを分ける。 */
export default function LedgerToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-tools-context" />;
}
