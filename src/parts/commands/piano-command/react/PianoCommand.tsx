'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as PianoCommandProps };
/** 押せるキーを思わせる候補列。選択した一段だけが沈み、縁が光る。 */
export default function PianoCommand(props:CommandProps) {
 return <CommandView {...props} skin="piano-command" />;
}
