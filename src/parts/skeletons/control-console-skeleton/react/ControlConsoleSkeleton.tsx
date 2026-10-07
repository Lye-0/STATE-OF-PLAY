'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ControlConsoleSkeletonProps };
/** 計器の区画に読込状態を置く。 */
export default function ControlConsoleSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="control-console-skeleton" />;
}
