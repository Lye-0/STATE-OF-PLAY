'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ArchiveFileSkeletonProps };
/** 書庫の索引欄と本文の余白を先に置く。 */
export default function ArchiveFileSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="archive-file-skeleton" />;
}
