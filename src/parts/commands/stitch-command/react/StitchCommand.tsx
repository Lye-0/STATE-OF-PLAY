'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StitchCommandProps };
/** 縫い目のグループと無地の操作面。 */
export default function StitchCommand(props:CommandProps) {
 return <CommandView {...props} skin="stitch-command" />;
}
