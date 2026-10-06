'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FileTreeSkeletonProps };
/** 階層の幹と短いファイル名の線を保ち、一覧の読込みを知らせる。 */
export default function FileTreeSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="file-tree-skeleton" />;
}
