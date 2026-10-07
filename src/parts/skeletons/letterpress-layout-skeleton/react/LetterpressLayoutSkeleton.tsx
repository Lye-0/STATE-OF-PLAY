'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LetterpressLayoutSkeletonProps };
/** 印刷の版面のような行を示す。 */
export default function LetterpressLayoutSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="letterpress-layout-skeleton" />;
}
