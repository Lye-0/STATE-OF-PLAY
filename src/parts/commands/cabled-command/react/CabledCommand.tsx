'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CabledCommandProps };
/** 検索の短い導線を左に置き、操作群をその導線から呼び出す。 */
export default function CabledCommand(props:CommandProps) {
 return <CommandView {...props} skin="cabled-command" />;
}
