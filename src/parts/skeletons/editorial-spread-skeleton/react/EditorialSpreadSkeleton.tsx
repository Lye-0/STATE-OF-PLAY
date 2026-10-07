'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as EditorialSpreadSkeletonProps };
/** 大きな余白と段組みの読込表示。 */
export default function EditorialSpreadSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="editorial-spread-skeleton" />;
}
