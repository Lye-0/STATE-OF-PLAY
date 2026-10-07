'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DispatchCommandProps };
/** 発送伝票の区画を持つコマンド窓。 */
export default function DispatchCommand(props:CommandProps) {
 return <CommandView {...props} skin="dispatch-command" />;
}
