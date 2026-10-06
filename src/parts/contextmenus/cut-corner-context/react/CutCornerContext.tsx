'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CutCornerContextProps };
/** 対象と操作の面に異なる切欠きを持たせ、どこから開いたかを示す。 */
export default function CutCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="cut-corner-context" />;
}
