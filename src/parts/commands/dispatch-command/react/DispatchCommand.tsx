'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DispatchCommandProps };
/** 配信デスクの操作票。起動面の差込口から、分類見出しと実行候補を持つ一覧へ展開する。 */
export default function DispatchCommand(props:CommandProps) {
 return <CommandView {...props} skin="dispatch-command" />;
}
