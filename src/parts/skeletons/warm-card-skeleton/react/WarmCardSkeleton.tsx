'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WarmCardSkeletonProps };
/** 著者と見出しを先に読む記事カードの待機表示。その下に図版と本文を置き、読み込み後も同じ読む順序を保つ。 */
export default function WarmCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="warm-card-skeleton" />;
}
