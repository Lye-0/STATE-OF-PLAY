'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ShelfCommandProps };
/** 操作の札を独立した小棚に載せ、現在の操作だけを前へ選ぶ。 */
export default function ShelfCommand(props:CommandProps) {
 return <CommandView {...props} skin="shelf-command" />;
}
