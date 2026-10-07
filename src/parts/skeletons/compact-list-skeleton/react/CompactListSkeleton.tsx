'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CompactListSkeletonProps };
/** 密度の高い一覧の読み込み表示。 */
export default function CompactListSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="compact-list-skeleton" />;
}
