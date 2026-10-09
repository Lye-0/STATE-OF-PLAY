'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as RibbonFileContextProps };
/** 元の丸い見出し帯を主役として保ち、選択行・縦線・分類線の同時強調をやめる。帯の24pxの丸みと下の4pxの返端、実選択の一段だけ強い紙色を残し、通常の項目は平らな読む面で揃える。 */
export default function RibbonFileContext(props:ContextProps) {
 return <ContextView {...props} skin="ribbon-file-context" />;
}
