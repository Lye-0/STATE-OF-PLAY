'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListColumnSkeletonProps };
/** 低かった図版を184pxへ広げ、人物と本文の二列を細い縦罫で分ける。下の資料を大きい均等箱にせず、本文と揃う下線と16pxの間隔で読む。読み込み前後の組版を揃え、狭幅では二列を解除して実人物名と文章の行を十分に確保する。 */
export default function ListColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-column-skeleton" />;
}
