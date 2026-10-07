'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ClearOutlineCommandProps };
/** 輪郭の明快な命令パレット。 */
export default function ClearOutlineCommand(props:CommandProps) {
 return <CommandView {...props} skin="clear-outline-command" />;
}
