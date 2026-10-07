'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as WarmProjectContextProps };
/** 削除操作と起動面の文字を明るい背景に適合。 */
export default function WarmProjectContext(props:ContextProps) {
 return <ContextView {...props} skin="warm-project-context" />;
}
