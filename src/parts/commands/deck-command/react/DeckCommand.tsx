'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as DeckCommandProps };
/** 重なったカードが開き、奥から一枚のコマンドデッキがせり上がる。 */
export default function DeckCommand(props:CommandProps) {
 return <CommandView {...props} skin="deck-command" />;
}
