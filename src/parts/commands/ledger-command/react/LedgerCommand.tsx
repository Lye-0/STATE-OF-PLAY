'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as LedgerCommandProps };
/** 帳簿から実行するコマンド。分類・記号・名称・キーを列に揃え、現在の行にだけ薄い記入面を置く。 */
export default function LedgerCommand(props:CommandProps) {
 return <CommandView {...props} skin="ledger-command" />;
}
