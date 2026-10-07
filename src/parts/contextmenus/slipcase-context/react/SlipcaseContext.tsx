'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SlipcaseContextProps };
/** ケースから操作票を引き出す。 */
export default function SlipcaseContext(props:ContextProps) {
 return <ContextView {...props} skin="slipcase-context" />;
}
