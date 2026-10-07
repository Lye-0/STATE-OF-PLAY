'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OpenCornerContextProps };
/** 対角の括弧で書類を囲む。 */
export default function OpenCornerContext(props:ContextProps) {
 return <ContextView {...props} skin="open-corner-context" />;
}
