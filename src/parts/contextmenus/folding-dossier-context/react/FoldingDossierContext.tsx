'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldingDossierContextProps };
/** 書類の折り返しを操作の見出しに。 */
export default function FoldingDossierContext(props:ContextProps) {
 return <ContextView {...props} skin="folding-dossier-context" />;
}
