'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ClearOutlineCommandProps };
/** 操作を密度の整った一覧で選ぶコマンドパレット。検索と候補を罫線で直結し、選択位置を側線で示す。 */
export default function ClearOutlineCommand(props:CommandProps) {
 return <CommandView {...props} skin="clear-outline-command" />;
}
