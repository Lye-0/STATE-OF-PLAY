'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CompactRowContextProps };
/** 一覧の行に置ける操作対象。 */
export default function CompactRowContext(props:ContextProps) {
 return <ContextView {...props} skin="compact-row-context" />;
}
