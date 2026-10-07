'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as SoftPreviewSkeletonProps };
/** 柔らかいカードの待機状態。 */
export default function SoftPreviewSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="soft-preview-skeleton" />;
}
