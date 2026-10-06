'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PortraitColumnSkeletonProps };
/** 人物の大きな縦窓と署名の二行を、プロフィールの待機面として置く。 */
export default function PortraitColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="portrait-column-skeleton" />;
}
