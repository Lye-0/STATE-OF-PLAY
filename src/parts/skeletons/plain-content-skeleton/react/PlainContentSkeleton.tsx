'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PlainContentSkeletonProps };
/** 汎用カードの読み込み表示。 */
export default function PlainContentSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="plain-content-skeleton" />;
}
