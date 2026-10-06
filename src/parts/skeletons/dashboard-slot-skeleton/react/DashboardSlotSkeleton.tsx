'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as DashboardSlotSkeletonProps };
/** 独立した三つの数値枠と細い読取帯を、先に確保する待機面。 */
export default function DashboardSlotSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="dashboard-slot-skeleton" />;
}
