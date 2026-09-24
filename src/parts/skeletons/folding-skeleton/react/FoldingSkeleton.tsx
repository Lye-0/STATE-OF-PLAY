'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FoldingSkeletonProps };
/** 折られた紙面がゆっくり傾き、読み込みの時間を形にする。 */
export default function FoldingSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="folding-skeleton" />;
}
