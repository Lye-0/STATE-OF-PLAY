'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpticalCommandProps };
/** 検索する計器面と候補を読むフォーカス面を分けたコマンドパレット。通常幅では二面を横に、狭幅では縦に接続し、入力と選択位置を安定した照準で結ぶ。 */
export default function OpticalCommand(props:CommandProps) {
 return <CommandView {...props} skin="optical-command" />;
}
