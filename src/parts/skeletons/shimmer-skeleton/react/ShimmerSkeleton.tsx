'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ShimmerSkeletonProps };
/** 汎用的なカードの読み込み表示。 */
export default function ShimmerSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="shimmer-skeleton" />;
}
