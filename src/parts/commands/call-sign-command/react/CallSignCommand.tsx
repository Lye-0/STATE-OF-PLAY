'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CallSignCommandProps };
/** 操作の名前を小さな呼出札に揃え、ショートカットを番号帯に分ける。 */
export default function CallSignCommand(props:CommandProps) {
 return <CommandView {...props} skin="call-sign-command" />;
}
