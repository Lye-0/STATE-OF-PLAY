'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LetterpressLayoutSkeletonProps };
/** 活版の表題と水平な文章行を先に組む。 */
export default function LetterpressLayoutSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="letterpress-layout-skeleton" />;
}
