'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FacetContextProps };
/** 切り欠いた輪郭と分光する境界。選択面が左右から合わさる。 */
export default function FacetContext(props:ContextProps) {
 return <ContextView {...props} skin="facet-context" />;
}
