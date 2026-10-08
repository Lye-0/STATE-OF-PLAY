'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as RibbonHeadingSkeletonProps };
/** 見出し帯と画像の下に内容を置く。読み込み後も帯は著者の見出しとして同じ位置に残る。 */
export default function RibbonHeadingSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ribbon-heading-skeleton" />;
}
