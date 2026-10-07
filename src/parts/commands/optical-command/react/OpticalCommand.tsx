'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as OpticalCommandProps };
/** 光学の丸窓から項目の読取線へ。 */
export default function OpticalCommand(props:CommandProps) {
 return <CommandView {...props} skin="optical-command" />;
}
