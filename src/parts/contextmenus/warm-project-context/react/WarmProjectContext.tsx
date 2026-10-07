'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as WarmProjectContextProps };
/** 制作資料に合う穏やかな操作欄。 */
export default function WarmProjectContext(props:ContextProps) {
 return <ContextView {...props} skin="warm-project-context" />;
}
