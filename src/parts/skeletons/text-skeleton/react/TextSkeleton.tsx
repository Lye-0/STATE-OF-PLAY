'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as TextSkeletonProps };
/** 文章だけに合わせた軽量なプレースホルダー。 */
export default function TextSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="text-skeleton" />;
}
