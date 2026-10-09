'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as LedgerCommandProps };
/** 名称・説明・キーを台帳の別欄へ記録するコマンドパレット。綴じ面から実連番を追い、狭幅では各記録の欄を順序通りに折りたたむ。 */
export default function LedgerCommand(props:CommandProps) {
 return <CommandView {...props} skin="ledger-command" />;
}
