'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WindowGridSkeletonProps };
/** 窓枠の上下で画像と本文の区画を分離。完了後も区画境界を固定する。 */
export default function WindowGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="window-grid-skeleton" />;
}
