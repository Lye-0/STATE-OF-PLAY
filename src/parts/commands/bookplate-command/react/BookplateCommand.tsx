'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BookplateCommandProps };
/** 蔵書票のようなコマンド一覧。背の線と分類の見出しを合わせ、候補の説明を小口の余白へ置く。 */
export default function BookplateCommand(props:CommandProps) {
 return <CommandView {...props} skin="bookplate-command" />;
}
