'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as IndexDrawerCommandProps };
/** 実検索の引き手と実候補の紙の積層を保ち、通常の行は一枚の薄い紙へ連続させる。厚い小口は検索口8pxと選んだ候補4pxだけに集約し、全候補を太い箱として重ねる表示を廃する。実説明とショートカットを14px／12pxで常に読み取れる位置へ置く。 */
export default function IndexDrawerCommand(props:CommandProps) {
 return <CommandView {...props} skin="index-drawer-command" />;
}
