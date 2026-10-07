'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BlueprintWireSkeletonProps };
/** 設計線が左から文字の領域を描く。 */
export default function BlueprintWireSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="blueprint-wire-skeleton" />;
}
