'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as OpenGridSkeletonProps };
/** 縦長の図版、独立した注記、本文を背景まで抜ける間隔で配置する待機表示。閉じたカード枠を使わず、格子の開いた端と交差点で情報の関係を示す。 */
export default function OpenGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="open-grid-skeleton" />;
}
