'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldingDossierContextProps };
/** 折り畳む資料の操作。対象の折り目をメニュー上辺へ残し、各操作は読める平らな行にする。 */
export default function FoldingDossierContext(props:ContextProps) {
 return <ContextView {...props} skin="folding-dossier-context" />;
}
