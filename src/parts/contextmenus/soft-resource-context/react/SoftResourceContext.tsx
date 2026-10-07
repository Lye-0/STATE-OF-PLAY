'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SoftResourceContextProps };
/** 資料カードの柔らかい操作面。 */
export default function SoftResourceContext(props:ContextProps) {
 return <ContextView {...props} skin="soft-resource-context" />;
}
