'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as CeramicFileContextProps };
/** 陶の操作台を、分類ごとに段差24pxのある実際の棚へ分ける。左の丸い側壁は一続き、右の小口は各実分類に沿う短い厚みで、全体を四角い箱へ囲わない。各棚のnative項目は同じ平らな面に並び、チェック・説明・長い名称を安定して読む。 */
export default function CeramicFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ceramic-file-context" />;
}
