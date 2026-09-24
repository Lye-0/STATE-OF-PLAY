'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as PaperContextProps };
/** 対象だけに反応する、キーボードでも使える操作メニュー。 */
export default function PaperContext(props:ContextProps) {
 return <ContextView {...props} skin="paper-context" />;
}
