'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CradleCommandProps };
/** 丸い上の印と平たい下の検索面を組み、小さな操作の受皿にする。 */
export default function CradleCommand(props:CommandProps) {
 return <CommandView {...props} skin="cradle-command" />;
}
