'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as PhotoCaptionSkeletonProps };
/** 写真を212pxの主面として先に見せ、人物・本文・資料をキャプションとして続ける。太い外枠を増やさず、写真の比率と22pxの余白、資料の上下線で全体を整える。待機中と実内容の領域を一致させ、本文14px・人物16pxの読みやすさを維持する。 */
export default function PhotoCaptionSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="photo-caption-skeleton" />;
}
