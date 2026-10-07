'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RibbonFileContextProps };
/** 帯で束ねた操作の票。 */
export default function RibbonFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ribbon-file-context" />;
}
