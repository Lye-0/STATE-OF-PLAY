'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BookplateToolsContextProps };
/** 蔵書票の書類ツール。綴じと二重罫の見出しを残し、操作の群を余白と細い区切りで読む。 */
export default function BookplateToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="bookplate-tools-context" />;
}
