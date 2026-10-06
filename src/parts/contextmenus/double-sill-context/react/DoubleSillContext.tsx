'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as DoubleSillContextProps };
/** 二段の薄い台で対象の面を支え、操作の一覧をその上へ開く。 */
export default function DoubleSillContext(props:ContextProps) {
 return <ContextView {...props} skin="double-sill-context" />;
}
