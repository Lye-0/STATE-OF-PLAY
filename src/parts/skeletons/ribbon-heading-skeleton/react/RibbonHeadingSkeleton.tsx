'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as RibbonHeadingSkeletonProps };
/** 見出しの帯から内容が現れる。 */
export default function RibbonHeadingSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ribbon-heading-skeleton" />;
}
