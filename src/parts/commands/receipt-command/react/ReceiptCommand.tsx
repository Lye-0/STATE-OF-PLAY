'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ReceiptCommandProps };
/** 受付票から実行するコマンド。分類の切り取り線を共有し、候補の操作キーを控え欄へ揃える。 */
export default function ReceiptCommand(props:CommandProps) {
 return <CommandView {...props} skin="receipt-command" />;
}
