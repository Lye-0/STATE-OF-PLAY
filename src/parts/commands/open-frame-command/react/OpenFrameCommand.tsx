'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpenFrameCommandProps };
/** コマンドを左右の括弧で囲む。 */
export default function OpenFrameCommand(props:CommandProps) {
 return <CommandView {...props} skin="open-frame-command" />;
}
