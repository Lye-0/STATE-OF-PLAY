'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListColumnSkeletonProps };
/** 縦に並ぶリストの待機表示。 */
export default function ListColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-column-skeleton" />;
}
