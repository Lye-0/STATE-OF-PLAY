'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListColumnSkeletonProps };
/** 目次の二列から読み込み後の本文量を予告。 */
export default function ListColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-column-skeleton" />;
}
