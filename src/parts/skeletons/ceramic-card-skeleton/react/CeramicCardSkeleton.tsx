'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CeramicCardSkeletonProps };
/** 陶器の浅い皿に内容を予告。 */
export default function CeramicCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ceramic-card-skeleton" />;
}
