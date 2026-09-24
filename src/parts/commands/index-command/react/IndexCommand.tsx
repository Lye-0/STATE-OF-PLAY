'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as IndexCommandProps };
/** 紙の目録を開くように、罫線と編集された文字組みでコマンドを探す。 */
export default function IndexCommand(props:CommandProps) {
 return <CommandView {...props} skin="index-command" />;
}
