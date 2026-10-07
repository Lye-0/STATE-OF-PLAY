'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StoneConsoleCommandProps };
/** 石のコンソールに項目の平面を埋め込む。 */
export default function StoneConsoleCommand(props:CommandProps) {
 return <CommandView {...props} skin="stone-console-command" />;
}
