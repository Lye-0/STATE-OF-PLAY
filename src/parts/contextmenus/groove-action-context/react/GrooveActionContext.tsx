'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as GrooveActionContextProps };
/** 深い溝のある対象面から、細い罫線で整理した操作を取り出す。 */
export default function GrooveActionContext(props:ContextProps) {
 return <ContextView {...props} skin="groove-action-context" />;
}
