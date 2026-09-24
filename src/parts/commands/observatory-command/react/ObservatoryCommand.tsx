'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ObservatoryCommandProps };
/** 夜の観測室。軌道の輪郭の内側で、光が選択した候補に集まる。 */
export default function ObservatoryCommand(props:CommandProps) {
 return <CommandView {...props} skin="observatory-command" />;
}
