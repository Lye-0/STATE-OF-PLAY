'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OpenCornerContextProps };
/** 開いた角と独立した明るい操作面。 */
export default function OpenCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="open-corner-context" />;
}
