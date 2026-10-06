'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ArcLabelContextProps };
/** 上端の丸い対象窓と、細い下の操作面を分けて見せる。 */
export default function ArcLabelContext(props:ContextProps) {
 return <ContextView {...props} skin="arc-label-context" />;
}
