'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LetterpressLayoutSkeletonProps };
/** 実題字・図版・本文を、密に組む一つの活版の塊へ載せる。本文の実行は2pxの間隔で接し、28pxの端面だけを同じ側へ露出して活字の厚さを示す。読む面の上・下・左へ面取り枠を付けず、四枚の浮いたカードへ分けない。32pxの実題字と168pxの図版も同じ組版塊へ接する実版として揃え、本文の切断面を主形にする。native文字は反転・傾斜せず、狭幅は端面20pxと全文の読む面を保つ。 */
export default function LetterpressLayoutSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="letterpress-layout-skeleton" />;
}
