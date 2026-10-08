'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CaptionCommandProps };
/** キャプションで区切る操作一覧。検索と分類名を小見出し、実行項目を読みやすい主面にする。 */
export default function CaptionCommand(props:CommandProps) {
 return <CommandView {...props} skin="caption-command" />;
}
