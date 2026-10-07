'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as SoftActionCommandProps };
/** 柔らかな面で操作を選ぶ。 */
export default function SoftActionCommand(props:CommandProps) {
 return <CommandView {...props} skin="soft-action-command" />;
}
