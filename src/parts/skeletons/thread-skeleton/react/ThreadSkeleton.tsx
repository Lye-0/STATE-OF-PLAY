'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ThreadSkeletonProps };
/** 線の束が交差し、コンテンツの幅を織り上げていく。 */
export default function ThreadSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="thread-skeleton" />;
}
