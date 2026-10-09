'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RailClampContextProps };
/** 左のクランプを分類ごとに重ねず、見出しの一つの接点へまとめる。元の細いレールと読む紙の距離を保ち、フォーカスする実行を淡い青の面で区別する。実分類は文字と余白へ戻し、操作・名称・説明の密度を整える。 */
export default function RailClampContext(props:ContextProps) {
 return <ContextView {...props} skin="rail-clamp-context" />;
}
