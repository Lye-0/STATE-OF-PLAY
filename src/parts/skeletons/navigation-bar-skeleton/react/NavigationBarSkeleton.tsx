'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as NavigationBarSkeletonProps };
/** 横の操作帯と下の左右の区画を、画面の準備段階から揃える。 */
export default function NavigationBarSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="navigation-bar-skeleton" />;
}
