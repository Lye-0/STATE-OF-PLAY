'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as EssentialCommandProps };
/** 検索、グループ、ショートカットを静かに整理したコマンド一覧。 */
export default function EssentialCommand(props:CommandProps) {
 return <CommandView {...props} skin="essential-command" />;
}
