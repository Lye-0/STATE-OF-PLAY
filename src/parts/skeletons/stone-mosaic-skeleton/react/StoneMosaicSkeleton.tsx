'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StoneMosaicSkeletonProps };
/** モザイクの大きい一面と下の三面を先に確保。画像・操作欄を読み込み後も同じ位置へ。 */
export default function StoneMosaicSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stone-mosaic-skeleton" />;
}
