'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as IndexPocketContextProps };
/** 元の索引の見出し帯と積層を保ち、分類の4pxの小口へ厚みを集約する。通常の実操作は厚い札へ分けず共通の紙へ戻し、選択面と名称17px・説明14px・shortcut12pxの密度を整える。 */
export default function IndexPocketContext(props:ContextProps) {
 return <ContextView {...props} skin="index-pocket-context" />;
}
