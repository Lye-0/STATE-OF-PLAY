'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as FoldedCommandProps };
/** 折ったコマンド票を開く。 */
export default function FoldedCommand(props:CommandProps) {
 return <CommandView {...props} skin="folded-command" />;
}
