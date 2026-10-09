'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as StitchedFileContextProps };
/** 上の輪と取っ手を廃止し、44pxの実起動を96pxの一つの接合軸へ置く。軸から非平行な二枚の幅広い支持片が開き、実対象の名称面と操作の読む面を保持する。展開メニューも一つの軸と二方向の支持を持ち、字とnativeボタンは動かさない。閉じた四辺枠・上部アーチ・縦の通し縫い背には戻さない。 */
export default function StitchedFileContext(props:ContextProps) {
 return <ContextView {...props} skin="stitched-file-context" />;
}
