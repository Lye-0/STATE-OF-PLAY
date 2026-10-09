'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as ClearActionContextProps };
/** 一覧行のまま操作できる簡潔なメニュー。小さい文書記号、名前、44pxの操作入口を横に揃え、狭幅では操作を下へ回す。 */
export default function ClearActionContext(props:ContextProps) {
 return <ContextView {...props} skin="clear-action-context" />;
}
