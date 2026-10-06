'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ObliqueActionCommandProps };
/** 候補の左端を斜めの小面で示し、文字の行は水平に保つ。 */
export default function ObliqueActionCommand(props:CommandProps) {
 return <CommandView {...props} skin="oblique-action-command" />;
}
