'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as IndexDrawerCommandProps };
/** 索引の引き出しからコマンド票を出す。 */
export default function IndexDrawerCommand(props:CommandProps) {
 return <CommandView {...props} skin="index-drawer-command" />;
}
