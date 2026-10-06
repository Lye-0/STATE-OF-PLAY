'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ShortcutColumnCommandProps };
/** 操作名を広く読み、ショートカットを独立した右の列へ揃える。 */
export default function ShortcutColumnCommand(props:CommandProps) {
 return <CommandView {...props} skin="shortcut-column-command" />;
}
