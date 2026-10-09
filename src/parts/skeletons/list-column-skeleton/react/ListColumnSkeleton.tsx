'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ListColumnSkeletonProps };
/** 左の図版・分類列と右の独立した記録札を並べる待機表示。横断する見出しの下で、実際の行数に合わせた札が縦へ続き、読み込み後も同じ構造で読む。 */
export default function ListColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="list-column-skeleton" />;
}
