'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as IsometricSkeletonProps };
/** 立体タイルが順に浮き沈みし、待機のリズムを作る。 */
export default function IsometricSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="isometric-skeleton" />;
}
