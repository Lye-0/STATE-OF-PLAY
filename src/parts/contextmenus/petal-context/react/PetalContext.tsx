'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as PetalContextProps };
/** 花弁のような非対称の角と、柔らかな選択面が開く。 */
export default function PetalContext(props:ContextProps) {
 return <ContextView {...props} skin="petal-context" />;
}
