'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ControlConsoleSkeletonProps };
/** コンソールの細い読取線に沿って文章を準備。 */
export default function ControlConsoleSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="control-console-skeleton" />;
}
