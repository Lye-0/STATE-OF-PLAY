'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FoldedCoverSkeletonProps };
/** 折り返した表紙の画像面と短い要約。読み込み後も表紙・著者・文章の順を保つ。 */
export default function FoldedCoverSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="folded-cover-skeleton" />;
}
