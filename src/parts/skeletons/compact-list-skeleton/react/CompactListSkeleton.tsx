'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CompactListSkeletonProps };
/** 待機中に予告する画像・人物・文章・小区画と、読み込み後の実内容を同じ構造で展示する。 */
export default function CompactListSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="compact-list-skeleton" />;
}
