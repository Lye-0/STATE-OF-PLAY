'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StitchedPageSkeletonProps };
/** 縫い目のあるページの読込表示。 */
export default function StitchedPageSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stitched-page-skeleton" />;
}
