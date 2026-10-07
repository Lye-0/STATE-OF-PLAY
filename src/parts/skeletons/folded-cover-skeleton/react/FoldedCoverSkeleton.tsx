'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FoldedCoverSkeletonProps };
/** 折った表紙と短い本文。 */
export default function FoldedCoverSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="folded-cover-skeleton" />;
}
