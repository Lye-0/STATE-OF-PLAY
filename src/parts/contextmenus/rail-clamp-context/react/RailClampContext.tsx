'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailClampContextProps };
/** 留め具とレールで操作を固定。 */
export default function RailClampContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-clamp-context" />;
}
