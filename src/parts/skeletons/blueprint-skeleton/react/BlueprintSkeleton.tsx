'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BlueprintSkeletonProps };
/** 製図の線が引かれ、まだ届いていないコンテンツの構造を示す。 */
export default function BlueprintSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="blueprint-skeleton" />;
}
