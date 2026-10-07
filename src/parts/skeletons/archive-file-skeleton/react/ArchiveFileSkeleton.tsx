'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ArchiveFileSkeletonProps };
/** 書類の綴じ側と本文を示す。 */
export default function ArchiveFileSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="archive-file-skeleton" />;
}
