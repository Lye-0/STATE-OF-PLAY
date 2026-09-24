'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ProfileSkeletonProps };
/** 小さなプロフィール行のためのプレースホルダー。 */
export default function ProfileSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="profile-skeleton" />;
}
