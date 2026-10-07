'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as WarmProjectCommandProps };
/** 制作資料に合う穏やかな操作窓。 */
export default function WarmProjectCommand(props:CommandProps) {
 return <CommandView {...props} skin="warm-project-command" />;
}
