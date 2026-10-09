'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as IndexDrawerCommandProps };
/** 側壁の奥に索引紙を重ね、手前の取手付き前板で受けるコマンドパレット。検索口・紙札・引出しの前面を異なる深さへ分け、文字と操作位置は固定する。 */
export default function IndexDrawerCommand(props:CommandProps) {
 return <CommandView {...props} skin="index-drawer-command" />;
}
