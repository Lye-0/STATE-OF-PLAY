'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CeramicCardSkeletonProps };
/** 陶器のカード皿に画像と本文を分けて配置。待機面と完了面の器を共通にする。 */
export default function CeramicCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ceramic-card-skeleton" />;
}
