'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DocketCommandProps };
/** 検索の小見出しを縦の背に置き、操作の一覧を資料面として開く。 */
export default function DocketCommand(props:CommandProps) {
 return <CommandView {...props} skin="docket-command" />;
}
