'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ColumnCopySkeletonProps };
/** 左の細いメディア帯と、右の本文行を先に確保する読み物の待機面。 */
export default function ColumnCopySkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="column-copy-skeleton" />;
}
