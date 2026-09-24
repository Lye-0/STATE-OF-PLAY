'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as GlassSkeletonProps };
/** 一枚の透明レンズが通り過ぎ、線の輝きが少し変わる。 */
export default function GlassSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="glass-skeleton" />;
}
