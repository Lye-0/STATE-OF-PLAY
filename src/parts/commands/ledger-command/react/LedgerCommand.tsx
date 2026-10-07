'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as LedgerCommandProps };
/** 台帳のように命令を分類する。 */
export default function LedgerCommand(props:CommandProps) {
 return <CommandView {...props} skin="ledger-command" />;
}
