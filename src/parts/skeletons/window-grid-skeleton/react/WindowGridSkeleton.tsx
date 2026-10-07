'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WindowGridSkeletonProps };
/** 読取窓の中で行の端が整う。 */
export default function WindowGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="window-grid-skeleton" />;
}
