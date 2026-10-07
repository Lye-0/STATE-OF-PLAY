'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CeramicFileContextProps };
/** 磁器の浅い皿に操作を並べる。 */
export default function CeramicFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ceramic-file-context" />;
}
