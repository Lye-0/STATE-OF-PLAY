'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CeramicCommandProps };
/** 磁器の操作トレイ。丸い検索窓と平らな候補面を分け、指で押しやすい余白を保つ。 */
export default function CeramicCommand(props:CommandProps) {
 return <CommandView {...props} skin="ceramic-command" />;
}
