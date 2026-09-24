'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as HingeContextProps };
/** 薄い背表紙が起点になり、操作の一覧が一枚の扉として開く。 */
export default function HingeContext(props:ContextProps) {
 return <ContextView {...props} skin="hinge-context" />;
}
