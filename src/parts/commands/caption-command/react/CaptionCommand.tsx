'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CaptionCommandProps };
/** 短い標題と細い罫線の操作窓。 */
export default function CaptionCommand(props:CommandProps) {
 return <CommandView {...props} skin="caption-command" />;
}
