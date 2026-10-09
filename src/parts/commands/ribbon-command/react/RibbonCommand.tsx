'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RibbonCommandProps };
/** 実グループの52pxの帯を分類ごとに候補の上へ通し、20pxの折れた末端を帯の裏へ残す。丸い小札と濃い紫の選択面の競合を廃し、帯の分類14pxと平らな候補19pxを分ける。起動面の16pxの帯を展開後の見出しへつなぎ、実候補は薄い紙として読む。 */
export default function RibbonCommand(props:CommandProps) {
 return <CommandView {...props} skin="ribbon-command" />;
}
