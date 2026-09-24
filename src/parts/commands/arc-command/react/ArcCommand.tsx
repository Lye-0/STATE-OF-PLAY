'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ArcCommandProps };
/** 深いアーチの内側から候補が現れる、建築的なコマンド空間。 */
export default function ArcCommand(props:CommandProps) {
 return <CommandView {...props} skin="arc-command" />;
}
