'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DispatchCommandProps };
/** 実コマンド群の分類を幅全体の仕分け口へ置き、実候補の処理票が口に8px入って下へ伸びる配信操作。柱と保持腕を廃し、分類の個数が紙と口の個数を決める。groupがないときは架空の分類口を増やさず一枚の票へ戻り、実検索は上の独立した差込面で読む。 */
export default function DispatchCommand(props:CommandProps) {
 return <CommandView {...props} skin="dispatch-command" />;
}
