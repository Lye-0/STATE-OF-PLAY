'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerToolsContextProps };
/** 書類の欄外に並ぶ小さな操作。 */
export default function LedgerToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-tools-context" />;
}
