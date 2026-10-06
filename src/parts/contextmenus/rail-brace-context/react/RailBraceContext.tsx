'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailBraceContextProps };
/** 細い左の支持線から対象と操作を結び、選ぶ行を広く示す。 */
export default function RailBraceContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-brace-context" />;
}
