'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SoftResourceContextProps };
/** 資料名と説明を読み、下の操作から開くコンパクトなメニュー。文書アイコンと内容を二列に揃え、操作の入口を分ける。 */
export default function SoftResourceContext(props:ContextProps) {
 return <ContextView {...props} skin="soft-resource-context" />;
}
