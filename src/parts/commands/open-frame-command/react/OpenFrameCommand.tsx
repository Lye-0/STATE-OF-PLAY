'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpenFrameCommandProps };
/** 互いに高さがずれた10pxと6pxの二本の支えを、実起動面とパレットの外へ残す開いたフレーム。上辺と下辺の囲いを置かず、検索を18pxの空間で見出しから離す。候補名22pxと説明14pxが一枚の明るい読む面に続き、実選択だけ淡い面へ切り替わる。 */
export default function OpenFrameCommand(props:CommandProps) {
 return <CommandView {...props} skin="open-frame-command" />;
}
