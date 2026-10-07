'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as CompactCommandDeskProps };
/** 操作を密度よく探せる窓。 */
export default function CompactCommandDesk(props:CommandProps) {
 return <CommandView {...props} skin="compact-command-desk" />;
}
