'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SlipcaseContextProps };
/** ケースから取り出す操作の一覧。 */
export default function SlipcaseContext(props:ContextProps) {
 return <ContextView {...props} skin="slipcase-context" />;
}
