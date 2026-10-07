'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as NeutralArticleSkeletonProps };
/** 文章中心のページの待機表示。 */
export default function NeutralArticleSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="neutral-article-skeleton" />;
}
