'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as TideSkeletonProps };
/** 文字の代わりに、柔らかな光の波が横切る。 */
export default function TideSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="tide-skeleton" />;
}
