'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as StitchCommandProps };
/** 実検索の布面と実候補の紙を、32pxの横帯と16pxの空隙で縫合するコマンド道具。64px間隔の双方の6pxの孔は同じxへ揃い、3pxの糸が孔の中心から48px渡る。四辺の布枠と孤立した点線を廃し、紙の孔の帯を局所スクロールから分離することで、候補を送っても接合が動かない。 */
export default function StitchCommand(props:CommandProps) {
 return <CommandView {...props} skin="stitch-command" />;
}
