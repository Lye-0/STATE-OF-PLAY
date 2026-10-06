'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CornerGateCommandProps };
/** 四隅の固定具を持つ検索窓から、操作の候補へ入る。 */
export default function CornerGateCommand(props:CommandProps) {
 return <CommandView {...props} skin="corner-gate-command" />;
}
