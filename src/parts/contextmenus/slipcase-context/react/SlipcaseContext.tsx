'use client';
import React from 'react';
import {ContextView,type ContextProps} from '../../../../shared/workbench/context-view';
import '../styles.css';
export type { ContextProps as SlipcaseContextProps };
/** 二重の四辺枠を廃止し、実対象の紙と実メニュー紙を右の64pxのケース口へ12px差し込む。ケースは片側だけの厚い断面と24pxの斜め開口、紙は左へ引き出された読む面として独立する。起動はケース端の44pxの実ボタンへ置き、角飾りで違いを作らない。 */
export default function SlipcaseContext(props:ContextProps) {
 return <ContextView {...props} skin="slipcase-context" />;
}
