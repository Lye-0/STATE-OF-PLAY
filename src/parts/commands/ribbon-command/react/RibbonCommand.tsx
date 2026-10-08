'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as RibbonCommandProps };
/** 操作名を束ねる帯。分類の細い帯と候補の端の印を使い、選択位置を大面積の暗色に頼らず示す。 */
export default function RibbonCommand(props:CommandProps) {
 return <CommandView {...props} skin="ribbon-command" />;
}
