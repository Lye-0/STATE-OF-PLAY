'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as WarmProjectCommandProps };
/** プロジェクトの操作を見出しごとに読むコマンドパレット。章の側線と書類の二重罫で分類し、操作名と説明を順に読む。 */
export default function WarmProjectCommand(props:CommandProps) {
 return <CommandView {...props} skin="warm-project-command" />;
}
