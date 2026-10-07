'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CeramicCommandProps };
/** 陶器の読取面へ独立した項目を収める。 */
export default function CeramicCommand(props:CommandProps) {
 return <CommandView {...props} skin="ceramic-command" />;
}
