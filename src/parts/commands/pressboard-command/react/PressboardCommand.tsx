'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as PressboardCommandProps };
/** 押印用の資料面を思わせる太い上縁で、検索と実行の場所を区切る。 */
export default function PressboardCommand(props:CommandProps) {
 return <CommandView {...props} skin="pressboard-command" />;
}
