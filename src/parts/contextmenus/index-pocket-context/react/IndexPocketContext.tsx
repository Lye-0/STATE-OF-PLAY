'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as IndexPocketContextProps };
/** 索引ポケットの操作。上の小見出しと下の操作欄を分け、対象の書類と同じ票の構造で展開。 */
export default function IndexPocketContext(props:ContextProps) {
 return <ContextView {...props} skin="index-pocket-context" />;
}
