'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as LedgerCommandProps };
/** 台帳の操作名とショートカットを左右に分ける。 */
export default function LedgerCommand(props:CommandProps) {
 return <CommandView {...props} skin="ledger-command" />;
}
