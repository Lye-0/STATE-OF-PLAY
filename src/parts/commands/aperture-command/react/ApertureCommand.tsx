'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ApertureCommandProps };
/** 開口が広がってコマンド空間が現れ、選択した行へ焦点が移る。 */
export default function ApertureCommand(props:CommandProps) {
 return <CommandView {...props} skin="aperture-command" />;
}
