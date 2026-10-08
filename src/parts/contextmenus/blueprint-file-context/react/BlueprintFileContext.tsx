'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BlueprintFileContextProps };
/** 図面のファイル操作。対象を一つの見取り枠へ置き、メニューは記号と操作名を分けた一覧にする。 */
export default function BlueprintFileContext(props:ContextProps) {
 return <ContextView {...props} skin="blueprint-file-context" />;
}
