'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as HangerActionContextProps };
/** 対象を小さな吊り札として見せ、操作を短いタグ列へ開く。 */
export default function HangerActionContext(props:ContextProps) {
 return <ContextView {...props} skin="hanger-action-context" />;
}
