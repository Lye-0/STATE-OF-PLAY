'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as LedgerCommandProps };
/** 帳簿の候補を読む左の罫だけ残し、グループと行の多重罫を廃する。実選択だけ6pxの朱茶の線と明るい面へ切り替え、通常の候補は2pxの細い記録線。実名称20px・説明14px・操作44px以上を保ち、長いショートカットは狭幅で次の行へ置く。 */
export default function LedgerCommand(props:CommandProps) {
 return <CommandView {...props} skin="ledger-command" />;
}
