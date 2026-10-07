'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BookplateCommandProps };
/** 蔵書票の操作名を広い余白で読む。 */
export default function BookplateCommand(props:CommandProps) {
 return <CommandView {...props} skin="bookplate-command" />;
}
