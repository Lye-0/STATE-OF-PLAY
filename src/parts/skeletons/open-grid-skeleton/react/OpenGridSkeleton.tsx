'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as OpenGridSkeletonProps };
/** 開いたグリッドで文章の分量を見せる。 */
export default function OpenGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="open-grid-skeleton" />;
}
