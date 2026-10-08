'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ArchiveFileSkeletonProps };
/** 資料カードの見出し画像を小さく、本文を広く確保。完了後も文書中心の構成を維持。 */
export default function ArchiveFileSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="archive-file-skeleton" />;
}
