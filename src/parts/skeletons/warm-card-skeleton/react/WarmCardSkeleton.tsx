'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WarmCardSkeletonProps };
/** 穏やかな紙色のカード待機表示。 */
export default function WarmCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="warm-card-skeleton" />;
}
