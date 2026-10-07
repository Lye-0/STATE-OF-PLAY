'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PhotoCaptionSkeletonProps };
/** 写真とキャプションを予告する。 */
export default function PhotoCaptionSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="photo-caption-skeleton" />;
}
