'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StoneMosaicSkeletonProps };
/** 石の段に合わせて文章の量を予告。 */
export default function StoneMosaicSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stone-mosaic-skeleton" />;
}
