'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as SoftPreviewSkeletonProps };
/** 一覧内のプレビューに使う待機表示。小さな図版と見出しを横に置き、短い本文と操作列を低い高さにまとめる。 */
export default function SoftPreviewSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="soft-preview-skeleton" />;
}
