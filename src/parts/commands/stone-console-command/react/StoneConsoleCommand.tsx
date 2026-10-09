'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StoneConsoleCommandProps };
/** 実見出しと検索を一つの厚い石梁へ置き、44pxの空隙を挟んだ実コマンドの切断床へ降ろす。梁と床は右の44pxの岩の首だけで連続し、首は下へ細くなる一体の切断面。周囲の大きい角丸枠を廃し、床の左を32pxずらして空間を開く。字面とnative入力は石の表面へ影や傾きを掛けず読む。 */
export default function StoneConsoleCommand(props:CommandProps) {
 return <CommandView {...props} skin="stone-console-command" />;
}
