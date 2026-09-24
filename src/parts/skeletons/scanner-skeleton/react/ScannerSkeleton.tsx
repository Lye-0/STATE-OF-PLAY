'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ScannerSkeletonProps };
/** 細い走査光が、フィルム状のプレースホルダーを読み取る。 */
export default function ScannerSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="scanner-skeleton" />;
}
