'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CrosshairActionContextProps };
/** 四つの角で対象を識別し、操作の一覧を一列の精密な枠へ置く。 */
export default function CrosshairActionContext(props:ContextProps) {
 return <ContextView {...props} skin="crosshair-action-context" />;
}
