'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DispatchCommandProps };
/** 指令の欄外番号と作業項目を分離。 */
export default function DispatchCommand(props:CommandProps) {
 return <CommandView {...props} skin="dispatch-command" />;
}
