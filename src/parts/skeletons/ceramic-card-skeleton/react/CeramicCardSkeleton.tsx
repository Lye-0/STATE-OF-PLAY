'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CeramicCardSkeletonProps };
/** 陶器の余白の中に段落が浮かぶ。 */
export default function CeramicCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ceramic-card-skeleton" />;
}
