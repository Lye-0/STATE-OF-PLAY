'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PhotoCaptionSkeletonProps };
/** 写真説明と同じ読み順で見出しと要約を予告。 */
export default function PhotoCaptionSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="photo-caption-skeleton" />;
}
