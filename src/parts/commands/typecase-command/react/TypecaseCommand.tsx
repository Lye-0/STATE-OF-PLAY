'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as TypecaseCommandProps };
/** 項目の短い見出しと小さなキーを、活字の区画のように整理する。 */
export default function TypecaseCommand(props:CommandProps) {
 return <CommandView {...props} skin="typecase-command" />;
}
