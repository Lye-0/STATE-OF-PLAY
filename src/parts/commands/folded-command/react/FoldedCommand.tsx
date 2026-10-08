'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as FoldedCommandProps };
/** 折り返すコマンド票。起動の折り目を検索ヘッダーへ引き継ぎ、候補は紙面の行として読む。 */
export default function FoldedCommand(props:CommandProps) {
 return <CommandView {...props} skin="folded-command" />;
}
