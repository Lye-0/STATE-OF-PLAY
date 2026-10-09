'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as FoldedCommandProps };
/** 検索と実候補を一枚の前紙へ置き、実祖先へ戻るnativeボタンだけを64pxの返し面として折り重ねる。24pxの折口と8pxの前紙への重なりが現在の階層をつなぐ。階層0では架空の祖先面を作らず、下の64pxの自由端と裏面を残す。祖先の操作は実idへ戻り、本文・native入力・字面は平らに保つ。 */
export default function FoldedCommand(props:CommandProps) {
 return <CommandView {...props} skin="folded-command" />;
}
