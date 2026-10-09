'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as StitchedFileContextProps };
/** 縫い合わされた布の背で操作の紙束を受けるメニュー。縫い目の接合部を文字から離し、分類ごとの紙を布面の上へ重ねる。 */
export default function StitchedFileContext(props:ContextProps) {
 return <ContextView {...props} skin="stitched-file-context" />;
}
