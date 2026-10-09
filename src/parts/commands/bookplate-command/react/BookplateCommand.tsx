'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BookplateCommandProps };
/** 検索した操作を一枚ずつ蔵書票に組むコマンド。分類見出しの下へ標章・操作名・説明・キーを持つ独立した紙を二列で並べ、狭幅では紙の情報順を保って一列にする。 */
export default function BookplateCommand(props:CommandProps) {
 return <CommandView {...props} skin="bookplate-command" />;
}
