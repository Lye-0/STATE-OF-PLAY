'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ConstellationCommandProps };
/** 細い経路と節点でグループをつなぐ、星図のような選択経路。 */
export default function ConstellationCommand(props:CommandProps) {
 return <CommandView {...props} skin="constellation-command" />;
}
