'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as TerminalCommandProps };
/** プロンプトと結果が一つの端末になる、細い走査線とタイピングの焦点。 */
export default function TerminalCommand(props:CommandProps) {
 return <CommandView {...props} skin="terminal-command" />;
}
