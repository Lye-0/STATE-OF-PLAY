'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as TableSkeletonProps };
/** 表の列と行の幅を、読み込み中も維持。 */
export default function TableSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="table-skeleton" />;
}
