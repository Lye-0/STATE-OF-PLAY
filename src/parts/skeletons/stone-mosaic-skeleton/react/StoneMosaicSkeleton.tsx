'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StoneMosaicSkeletonProps };
/** 小さな石板を並べた読込面。 */
export default function StoneMosaicSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stone-mosaic-skeleton" />;
}
