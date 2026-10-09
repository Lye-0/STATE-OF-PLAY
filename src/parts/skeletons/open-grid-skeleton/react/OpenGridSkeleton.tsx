'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as OpenGridSkeletonProps };
/** 開いた情報グリッドの線と余白を揃える。図版を176pxの全幅、人物と本文を二列、三資料を下の基準線へまとめる。左だけの太線を3pxへ整え、内部は1pxの線と24pxの余白で秩序を作る。狭幅は全幅の読み順へ戻し、本文が細列に閉じ込められないようにする。 */
export default function OpenGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="open-grid-skeleton" />;
}
