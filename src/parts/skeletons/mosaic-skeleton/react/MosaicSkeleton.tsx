'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as MosaicSkeletonProps };
/** 違う比率の四角い面が、順に明るさを変える。 */
export default function MosaicSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="mosaic-skeleton" />;
}
