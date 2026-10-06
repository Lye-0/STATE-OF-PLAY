'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as MonogramCommandProps };
/** 大きな検索印と静かな入力面を分け、操作を本文の列で探す。 */
export default function MonogramCommand(props:CommandProps) {
 return <CommandView {...props} skin="monogram-command" />;
}
