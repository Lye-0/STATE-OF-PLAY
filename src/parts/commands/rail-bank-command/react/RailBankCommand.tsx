'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RailBankCommandProps };
/** 制御バンクの軌道と選択面を連続させる。 */
export default function RailBankCommand(props:CommandProps) {
 return <CommandView {...props} skin="rail-bank-command" />;
}
