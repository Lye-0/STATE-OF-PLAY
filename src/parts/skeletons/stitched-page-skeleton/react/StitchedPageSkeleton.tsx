'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StitchedPageSkeletonProps };
/** 綴じた小冊子の一頁。画像・著者・本文を同じ縫い目の内側へ揃える。 */
export default function StitchedPageSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stitched-page-skeleton" />;
}
