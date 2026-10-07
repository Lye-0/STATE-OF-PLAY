'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpticalCommandProps };
/** 光学機器の窓から操作を探す。 */
export default function OpticalCommand(props:CommandProps) {
 return <CommandView {...props} skin="optical-command" />;
}
