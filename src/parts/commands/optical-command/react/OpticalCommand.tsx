'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpticalCommandProps };
/** 光学スコープの操作検索。検索口を丸い記号に接続し、結果の選択位置を縦の照合線で示す。 */
export default function OpticalCommand(props:CommandProps) {
 return <CommandView {...props} skin="optical-command" />;
}
