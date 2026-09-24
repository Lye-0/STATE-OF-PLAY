'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as OrbitContextProps };
/** 選択した操作を細い軌道が囲む、丸い端と連続した経路。 */
export default function OrbitContext(props:ContextProps) {
 return <ContextView {...props} skin="orbit-context" />;
}
