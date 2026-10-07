'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BookJacketSkeletonProps };
/** 本の表紙と背を先に示す。 */
export default function BookJacketSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="book-jacket-skeleton" />;
}
