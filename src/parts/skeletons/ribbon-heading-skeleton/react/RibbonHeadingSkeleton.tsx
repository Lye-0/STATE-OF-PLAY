'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as RibbonHeadingSkeletonProps };
/** 帯の見出しから本文の行が続く。 */
export default function RibbonHeadingSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ribbon-heading-skeleton" />;
}
