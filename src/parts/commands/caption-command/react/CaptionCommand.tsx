'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CaptionCommandProps };
/** 操作名の本文と説明の傍注を別欄で読むコマンド。連番の余白、大きな操作名、短い注記とキーを編集紙面に組み、狭幅では注記を本文の下へ接続する。 */
export default function CaptionCommand(props:CommandProps) {
 return <CommandView {...props} skin="caption-command" />;
}
