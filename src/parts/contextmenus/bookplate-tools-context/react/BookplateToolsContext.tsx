'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BookplateToolsContextProps };
/** 蔵書票の中に対象名を置く。 */
export default function BookplateToolsContext(props:ContextProps) {
 return <ContextView {...props} skin="bookplate-tools-context" />;
}
