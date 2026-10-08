'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as IndexDrawerCommandProps };
/** 索引引き出しのコマンド。分類を引出しの前板、候補を中の票として分け、検索語を上の窓へ固定。 */
export default function IndexDrawerCommand(props:CommandProps) {
 return <CommandView {...props} skin="index-drawer-command" />;
}
