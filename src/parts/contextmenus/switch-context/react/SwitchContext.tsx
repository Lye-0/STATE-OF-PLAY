'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SwitchContextProps };
/** 区切られたキーが一段沈む、小さな操作卓としてのメニュー。 */
export default function SwitchContext(props:ContextProps) {
 return <ContextView {...props} skin="switch-context" />;
}
