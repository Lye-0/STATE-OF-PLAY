'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ReceiptFileContextProps };
/** 受領票の実行欄と削除を分ける。 */
export default function ReceiptFileContext(props:ContextProps) {
 return <ContextView {...props} skin="receipt-file-context" />;
}
