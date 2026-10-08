'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ReceiptFileContextProps };
/** 資料の受領控えに付く操作。対象と操作一覧をミシン目の票に揃え、危険な操作の色は十分に濃く保つ。 */
export default function ReceiptFileContext(props:ContextProps) {
 return <ContextView {...props} skin="receipt-file-context" />;
}
