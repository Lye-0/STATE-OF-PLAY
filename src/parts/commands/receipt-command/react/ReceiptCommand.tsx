'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ReceiptCommandProps };
/** 受領票の一行に実行項目をまとめる。 */
export default function ReceiptCommand(props:CommandProps) {
 return <CommandView {...props} skin="receipt-command" />;
}
