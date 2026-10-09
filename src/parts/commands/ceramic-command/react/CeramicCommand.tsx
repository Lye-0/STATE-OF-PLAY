'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CeramicCommandProps };
/** 実検索の短い上面から、全幅76pxの湾曲した陶の折返しを通り、72pxずれた実候補の長い平底へ続く操作器。丸角カードと別脚を撤去し、12pxの白い上の釉薬と12pxの青い折断面が一枚の陶の表裏を示す。候補紙は折返しに24px重なり、字面とnative検索はそれぞれの平面へ固定する。 */
export default function CeramicCommand(props:CommandProps) {
 return <CommandView {...props} skin="ceramic-command" />;
}
