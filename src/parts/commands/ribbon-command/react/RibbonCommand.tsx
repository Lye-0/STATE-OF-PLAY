'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RibbonCommandProps };
/** 帯を通したコマンド札。 */
export default function RibbonCommand(props:CommandProps) {
 return <CommandView {...props} skin="ribbon-command" />;
}
