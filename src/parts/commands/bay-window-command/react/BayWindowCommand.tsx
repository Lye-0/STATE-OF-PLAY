'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BayWindowCommandProps };
/** 検索の入力を浅い窓へ置き、候補は厚い縁の内側へ収める。 */
export default function BayWindowCommand(props:CommandProps) {
 return <CommandView {...props} skin="bay-window-command" />;
}
