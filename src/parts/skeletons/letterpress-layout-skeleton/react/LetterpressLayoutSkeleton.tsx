'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LetterpressLayoutSkeletonProps };
/** 伝票の画像枠と印字行を予告。完了後も画像・署名・四つの本文行を同じ順序で表示。 */
export default function LetterpressLayoutSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="letterpress-layout-skeleton" />;
}
