'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as PlainWorkspaceCommandProps };
/** 作業画面の標準コマンド一覧。 */
export default function PlainWorkspaceCommand(props:CommandProps) {
 return <CommandView {...props} skin="plain-workspace-command" />;
}
