'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailContextProps };
/** 金属キャリッジのような選択面が、精密なガイドに沿って収まる。 */
export default function RailContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-context" />;
}
