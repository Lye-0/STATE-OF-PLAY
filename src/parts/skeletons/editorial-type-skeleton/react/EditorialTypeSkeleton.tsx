'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as EditorialTypeSkeletonProps };
/** 大きな見出しの塊と細い本文行を、印刷面のように組み立てる。 */
export default function EditorialTypeSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="editorial-type-skeleton" />;
}
