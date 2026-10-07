'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BookplateToolsContextProps };
/** 蔵書票の読み順に操作を整理。 */
export default function BookplateToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="bookplate-tools-context" />;
}
