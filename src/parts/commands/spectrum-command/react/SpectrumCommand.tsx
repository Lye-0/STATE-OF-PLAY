'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as SpectrumCommandProps };
/** 透明な切断面が左右から合わさり、候補の背後で分光する。 */
export default function SpectrumCommand(props:CommandProps) {
 return <CommandView {...props} skin="spectrum-command" />;
}
