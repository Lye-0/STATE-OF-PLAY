'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BookplateCommandProps };
/** 蔵書票の見出しで操作を分類。 */
export default function BookplateCommand(props:CommandProps) {
 return <CommandView {...props} skin="bookplate-command" />;
}
