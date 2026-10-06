'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ChamferToolContextProps };
/** 低い金属の斜面を持つ対象面と、操作を置く小区画を組み合わせる。 */
export default function ChamferToolContext(props:ContextProps) {
 return <ContextView {...props} skin="chamfer-tool-context" />;
}
