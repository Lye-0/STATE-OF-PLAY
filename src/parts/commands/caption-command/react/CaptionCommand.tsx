'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CaptionCommandProps };
/** 小見出しと実行行を二段で読み分ける。 */
export default function CaptionCommand(props:CommandProps) {
 return <CommandView {...props} skin="caption-command" />;
}
