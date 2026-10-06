'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListCellSkeletonProps };
/** 小さな図版と本文を左右に揃えた、一覧の行用の待機表示。 */
export default function ListCellSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-cell-skeleton" />;
}
