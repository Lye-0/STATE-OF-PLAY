'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as RadarSkeletonProps };
/** 円形の走査面と、到着を待つ小さな情報線。 */
export default function RadarSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="radar-skeleton" />;
}
