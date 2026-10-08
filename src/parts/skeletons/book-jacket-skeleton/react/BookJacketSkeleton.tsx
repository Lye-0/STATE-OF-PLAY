'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BookJacketSkeletonProps };
/** 装丁の表紙を大きく先読み表示。読み込み後の表紙とタイトル情報を同じ余白に収める。 */
export default function BookJacketSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="book-jacket-skeleton" />;
}
