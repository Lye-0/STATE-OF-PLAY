'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as SteppedListCommandProps };
/** 段差のある候補面が、現在の操作へ軽く張り出す。 */
export default function SteppedListCommand(props:CommandProps) {
 return <CommandView {...props} skin="stepped-list-command" />;
}
