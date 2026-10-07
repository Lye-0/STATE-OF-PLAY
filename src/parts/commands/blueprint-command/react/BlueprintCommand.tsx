'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BlueprintCommandProps };
/** 工程図のような操作一覧。 */
export default function BlueprintCommand(props:CommandProps) {
 return <CommandView {...props} skin="blueprint-command" />;
}
