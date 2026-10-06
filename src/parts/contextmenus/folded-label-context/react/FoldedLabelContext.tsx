'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldedLabelContextProps };
/** 対象の角を折り返し、操作を印刷面のような余白へ広げる。 */
export default function FoldedLabelContext(props:ContextProps) {
 return <ContextView {...props} skin="folded-label-context" />;
}
