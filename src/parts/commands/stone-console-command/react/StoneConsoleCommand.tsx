'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StoneConsoleCommandProps };
/** 石の操作コンソール。検索は浅い溝、候補は明るい段へ分け、選択行だけ奥の色を変える。 */
export default function StoneConsoleCommand(props:CommandProps) {
 return <CommandView {...props} skin="stone-console-command" />;
}
