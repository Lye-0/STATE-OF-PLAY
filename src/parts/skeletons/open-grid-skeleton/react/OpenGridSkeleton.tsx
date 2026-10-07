'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as OpenGridSkeletonProps };
/** 本文のグリッドだけを残す。 */
export default function OpenGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="open-grid-skeleton" />;
}
