'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SlipContextProps };
/** 厚みのあるガラスが滑り込み、項目間の透明な選択面が移る。 */
export default function SlipContext(props:ContextProps) {
 return <ContextView {...props} skin="slip-context" />;
}
