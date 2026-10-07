'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WindowGridSkeletonProps };
/** 窓のような三分割のカード。 */
export default function WindowGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="window-grid-skeleton" />;
}
