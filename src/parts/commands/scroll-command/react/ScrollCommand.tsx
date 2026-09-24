'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ScrollCommandProps };
/** 丸めた紙が開き、候補が段を追って現れるスクロール型。 */
export default function ScrollCommand(props:CommandProps) {
 return <CommandView {...props} skin="scroll-command" />;
}
