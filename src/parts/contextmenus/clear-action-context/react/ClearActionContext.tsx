'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ClearActionContextProps };
/** 輪郭が明快な対象とメニュー。 */
export default function ClearActionContext(props:ContextProps) {
 return <ContextView {...props} skin="clear-action-context" />;
}
