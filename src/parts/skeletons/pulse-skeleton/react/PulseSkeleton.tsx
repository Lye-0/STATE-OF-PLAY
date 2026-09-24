'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PulseSkeletonProps };
/** 柔らかな明暗で待機を示す。 */
export default function PulseSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="pulse-skeleton" />;
}
