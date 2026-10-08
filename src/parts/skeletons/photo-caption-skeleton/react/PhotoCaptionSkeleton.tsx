'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PhotoCaptionSkeletonProps };
/** 横長写真と下の著者情報を一つのキャプションとして組む。待機の画像比率を実内容へ引き継ぐ。 */
export default function PhotoCaptionSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="photo-caption-skeleton" />;
}
