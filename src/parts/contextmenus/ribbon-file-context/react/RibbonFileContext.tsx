'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RibbonFileContextProps };
/** 帯で束ねた書類の操作。左の短い帯を見出しと操作群の印へ使い、本文面は明るく保つ。 */
export default function RibbonFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ribbon-file-context" />;
}
