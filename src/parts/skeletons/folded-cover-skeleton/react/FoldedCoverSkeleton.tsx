'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FoldedCoverSkeletonProps };
/** 折った表題が本文面の上に現れる。 */
export default function FoldedCoverSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="folded-cover-skeleton" />;
}
