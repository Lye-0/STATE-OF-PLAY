'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as GalleryGridSkeletonProps };
/** 三つの展示枠と下の短い説明欄を、動かさずに先に描く。 */
export default function GalleryGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="gallery-grid-skeleton" />;
}
