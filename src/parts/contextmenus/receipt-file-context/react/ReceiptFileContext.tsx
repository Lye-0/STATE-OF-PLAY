'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ReceiptFileContextProps };
/** 作業票の細い区切りと操作。 */
export default function ReceiptFileContext(props:ContextProps) {
 return <ContextView {...props} skin="receipt-file-context" />;
}
