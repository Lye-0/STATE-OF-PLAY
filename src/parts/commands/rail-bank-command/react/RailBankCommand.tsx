'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RailBankCommandProps };
/** レールに沿って命令が並ぶ。 */
export default function RailBankCommand(props:CommandProps) {
 return <CommandView {...props} skin="rail-bank-command" />;
}
