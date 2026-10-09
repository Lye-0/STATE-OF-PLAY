'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as WarmProjectContextProps };
/** 書類のまとまりと分類見出しで操作を読むメニュー。名称を大きな明朝体にし、メニュー内も分類の帯と短い行へ整理する。 */
export default function WarmProjectContext(props:ContextProps) {
 return <ContextView {...props} skin="warm-project-context" />;
}
