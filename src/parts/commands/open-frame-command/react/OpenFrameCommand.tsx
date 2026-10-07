'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpenFrameCommandProps };
/** 開いた枠からコマンドの列へ視線を通す。 */
export default function OpenFrameCommand(props:CommandProps) {
 return <CommandView {...props} skin="open-frame-command" />;
}
