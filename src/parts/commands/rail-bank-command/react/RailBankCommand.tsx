'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RailBankCommandProps };
/** 高さの違う二本のレールに、実コマンド一行ごとの16pxの横桁が両端8pxずつ入る操作バンク。記号やshortcutの小面を支持役から外し、本文下へshortcutが折り返されても横桁とレールの接点は変わらない。横桁は読む紙の背面、native字面は平らな面で保護する。 */
export default function RailBankCommand(props:CommandProps) {
 return <CommandView {...props} skin="rail-bank-command" />;
}
