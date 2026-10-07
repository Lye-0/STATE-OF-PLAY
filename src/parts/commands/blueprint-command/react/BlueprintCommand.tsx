'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BlueprintCommandProps };
/** 青図の操作行を一定のグリッドに収める。 */
export default function BlueprintCommand(props:CommandProps) {
 return <CommandView {...props} skin="blueprint-command" />;
}
