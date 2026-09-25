'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LgcSkeletonsLensProps };
/** 汎用的なカードの読み込み表示。 */
export default function LgcSkeletonsLens(props: SkeletonProps) {
  return <SkeletonView {...props} skin="lgc-skeletons-lens" className={`lgc-root ${props.className??''}`} />;
}
