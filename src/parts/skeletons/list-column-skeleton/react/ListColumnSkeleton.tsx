'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListColumnSkeletonProps };
/** 一覧の一行を大きいサムネイルと詳細に分ける。構造が同じまま実データへ置き換わる。 */
export default function ListColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-column-skeleton" />;
}
