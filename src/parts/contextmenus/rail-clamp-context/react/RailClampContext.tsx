'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailClampContextProps };
/** レールの留め具の内側に操作列を置く。 */
export default function RailClampContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-clamp-context" />;
}
