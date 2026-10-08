'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BlueprintWireSkeletonProps };
/** 印刷フレームの大きい画像と下段の署名。待機と完了で画像枠の比率を揃える。 */
export default function BlueprintWireSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="blueprint-wire-skeleton" />;
}
