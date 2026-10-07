'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldingDossierContextProps };
/** 折った書類の頭に操作名をまとめる。 */
export default function FoldingDossierContext(props:ContextProps) {
 return <ContextView {...props} skin="folding-dossier-context" />;
}
