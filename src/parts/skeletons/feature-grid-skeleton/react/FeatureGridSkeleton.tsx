'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FeatureGridSkeletonProps };
/** 大きな説明枠を置かず、対等な情報の小面を格子に揃える。 */
export default function FeatureGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="feature-grid-skeleton" />;
}
