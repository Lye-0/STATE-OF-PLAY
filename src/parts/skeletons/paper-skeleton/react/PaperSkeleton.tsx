'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PaperSkeletonProps };
/** 明るい画面になじむ、落ち着いたカード。 */
export default function PaperSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="paper-skeleton" />;
}
