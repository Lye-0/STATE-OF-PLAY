'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as EditorialSpreadSkeletonProps };
/** 見開きの見出しと本文を先に組版。 */
export default function EditorialSpreadSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="editorial-spread-skeleton" />;
}
