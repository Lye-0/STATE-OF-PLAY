'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OutlineCommandProps };
/** 検索、グループ、ショートカットを静かに整理したコマンド一覧。 */
export default function OutlineCommand(props:CommandProps) {
 return <CommandView {...props} skin="outline-command" />;
}
