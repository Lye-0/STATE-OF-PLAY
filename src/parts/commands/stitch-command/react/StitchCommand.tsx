'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StitchCommandProps };
/** 縫い合わせた操作ノート。分類の縫い目と候補札を分け、現在の実行行は面の色と輪郭で示す。 */
export default function StitchCommand(props:CommandProps) {
 return <CommandView {...props} skin="stitch-command" />;
}
