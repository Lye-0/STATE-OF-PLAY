'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ReceiptCommandProps };
/** 命令を短い伝票のように分類。 */
export default function ReceiptCommand(props:CommandProps) {
 return <CommandView {...props} skin="receipt-command" />;
}
