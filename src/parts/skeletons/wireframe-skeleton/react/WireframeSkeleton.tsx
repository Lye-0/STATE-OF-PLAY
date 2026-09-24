'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WireframeSkeletonProps };
/** 面を塗らず、細い輪郭だけが息をするように現れる。 */
export default function WireframeSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="wireframe-skeleton" />;
}
