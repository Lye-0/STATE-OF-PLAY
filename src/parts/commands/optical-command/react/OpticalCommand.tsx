'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpticalCommandProps };
/** 丸い52pxの起動記号と、実コマンドの円形アイコンを保つ。起動60px、閉じる44px、実候補名19pxと説明14pxで、図記号・操作・読む面を分ける。青い面を暗く濁らせず、選択の面を一段だけ強くする。狭幅は長いショートカットを候補本文の次の行へ戻す。 */
export default function OpticalCommand(props:CommandProps) {
 return <CommandView {...props} skin="optical-command" />;
}
