'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as InkContextProps };
/** 太い活字と細い下線。選んだ行を、インクの一本線が追いかける。 */
export default function InkContext(props:ContextProps) {
 return <ContextView {...props} skin="ink-context" />;
}
