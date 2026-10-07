'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StitchCommandProps };
/** 縫い目のあるツールポーチを開く。 */
export default function StitchCommand(props:CommandProps) {
 return <CommandView {...props} skin="stitch-command" />;
}
