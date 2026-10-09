'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as BlueprintFileContextProps };
/** 実対象名と実階層の見出しを右へ48px寄せ、操作の紙を左へ張り出した片持ちの立面にする。32pxの側脚と48pxの折れで上の面から下の操作紙へ接合する。四周の図面枠を廃止し、実分類と名称は不透明な一枚の読む面に保つ。 */
export default function BlueprintFileContext(props:ContextProps) {
 return <ContextView {...props} skin="blueprint-file-context" />;
}
