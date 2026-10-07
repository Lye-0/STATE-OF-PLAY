'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BookJacketSkeletonProps };
/** ブックジャケットの表題と概要を読み順に置く。 */
export default function BookJacketSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="book-jacket-skeleton" />;
}
