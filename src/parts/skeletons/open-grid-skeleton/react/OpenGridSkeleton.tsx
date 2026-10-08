'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as OpenGridSkeletonProps };
/** 開いた二列のギャラリー予告。左の画像と右の文章を上下で対にし、完了後も列を変えない。 */
export default function OpenGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="open-grid-skeleton" />;
}
