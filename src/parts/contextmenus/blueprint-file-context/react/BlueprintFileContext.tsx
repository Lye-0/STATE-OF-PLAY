'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BlueprintFileContextProps };
/** 青図の行と補助キーを整列。 */
export default function BlueprintFileContext(props:ContextProps) {
 return <ContextView {...props} skin="blueprint-file-context" />;
}
