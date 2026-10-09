'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RibbonFileContextProps };
/** 紙の裏から通したリボンが操作見出しを包むメニュー。外側の縦帯と見出しの折返しをつなぎ、下の記録紙を受ける厚みと二股のリボン端を文字の外へ分ける。 */
export default function RibbonFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ribbon-file-context" />;
}
