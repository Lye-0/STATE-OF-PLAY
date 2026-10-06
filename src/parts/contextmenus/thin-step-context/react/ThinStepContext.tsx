'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ThinStepContextProps };
/** 対象の端に小さな段を作り、操作の行ごとに浅い縁を置く。 */
export default function ThinStepContext(props:ContextProps) {
 return <ContextView {...props} skin="thin-step-context" />;
}
