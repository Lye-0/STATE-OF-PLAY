'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BlueprintCommandProps };
/** 設計の実行表。コマンド記号とショートカットを独立列へ揃え、分類ごとに罫線でまとまりを作る。 */
export default function BlueprintCommand(props:CommandProps) {
 return <CommandView {...props} skin="blueprint-command" />;
}
