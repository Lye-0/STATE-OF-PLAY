'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ControlConsoleSkeletonProps };
/** 制御画面の状態画像と右のログ。読み込み後もログと下の操作列が同じ区画に入る。 */
export default function ControlConsoleSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="control-console-skeleton" />;
}
