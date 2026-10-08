'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpenFrameCommandProps };
/** 大きな検索と余白の実行一覧。外箱を薄くし、分類のタイポグラフィと選択下線で行を区切る。 */
export default function OpenFrameCommand(props:CommandProps) {
 return <CommandView {...props} skin="open-frame-command" />;
}
