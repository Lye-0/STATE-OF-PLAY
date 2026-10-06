'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as LedgerSpurContextProps };
/** 短い番号の余白を持つ対象札から、細い操作の台帳を開く。 */
export default function LedgerSpurContext(props:ContextProps) {
 return <ContextView {...props} skin="ledger-spur-context" />;
}
