'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CaptionCommandProps };
/** 実グループの名前を候補の左の読む起点へ戻し、右寄せ見出しから視線を往復する構成を整える。候補は2pxの説明罫、実名称20px・説明14pxで揃え、各行の長いショートカットにも読む行を確保する。選択時は候補の面だけ強くし、分類名と競う札を加えない。 */
export default function CaptionCommand(props:CommandProps) {
 return <CommandView {...props} skin="caption-command" />;
}
