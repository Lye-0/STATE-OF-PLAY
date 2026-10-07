'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CeramicFileContextProps };
/** 浅いトレーに対象を収める。 */
export default function CeramicFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ceramic-file-context" />;
}
