'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DescriptionFirstCommandProps };
/** 補足を二行まで読みやすく取り、操作を名前だけで判断しない候補列。 */
export default function DescriptionFirstCommand(props:CommandProps) {
 return <CommandView {...props} skin="description-first-command" />;
}
