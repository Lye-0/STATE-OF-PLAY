'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RailBankCommandProps };
/** 実行候補を接続する操作レール。起動面の左右の支えを開いた一覧にも残し、選択行の短い桟を強調。 */
export default function RailBankCommand(props:CommandProps) {
 return <CommandView {...props} skin="rail-bank-command" />;
}
