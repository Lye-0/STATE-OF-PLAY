'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as EditorialSpreadSkeletonProps };
/** 編集誌面の画像列と本文列を先に確保。読み込み後も同じ組版へ実際の内容を置く。 */
export default function EditorialSpreadSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="editorial-spread-skeleton" />;
}
