'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as FoldingDossierContextProps };
/** 操作ごとの交互折片を全廃し、現在の実メニューだけを載せる一枚の前紙を、大きい非対称の64px折面へ16px入れる。実親へ戻る場合だけ、幅80pxのnative戻るを開いた横差し受けへ置く。祖先数で折面を増やさず、header・現在の実親・実操作の二領域の接合を読む。分類とdisabled本文は不透明な紙を保つ。 */
export default function FoldingDossierContext(props:ContextProps) {
 return <ContextView {...props} skin="folding-dossier-context" />;
}
