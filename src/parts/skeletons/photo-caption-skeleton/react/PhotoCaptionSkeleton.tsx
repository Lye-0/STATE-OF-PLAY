'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PhotoCaptionSkeletonProps };
/** 写真の白縁と余白の注記がつながる待機表示。図版、細い注釈罫、明朝の見出しを読み込み後も同じ組版で示す。 */
export default function PhotoCaptionSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="photo-caption-skeleton" />;
}
