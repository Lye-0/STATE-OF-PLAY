'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as SoftActionCommandProps };
/** 用途のまとまりをカードで選ぶコマンドパレット。小さな起動アイコン、広い検索行、短い説明付き操作カードで構成する。 */
export default function SoftActionCommand(props:CommandProps) {
 return <CommandView {...props} skin="soft-action-command" />;
}
