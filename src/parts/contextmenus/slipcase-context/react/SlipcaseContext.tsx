'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SlipcaseContextProps };
/** スリーブから取り出す書類。対象の片側を覆う薄い面と、開いたメニューの操作票を対応。 */
export default function SlipcaseContext(props:ContextProps) {
 return <ContextView {...props} skin="slipcase-context" />;
}
