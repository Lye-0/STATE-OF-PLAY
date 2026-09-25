'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as LgcSkeletonsMistProps };
/** 柔らかな明暗で待機を示す。 */
export default function LgcSkeletonsMist(props: SkeletonProps) {
  return <SkeletonView {...props} skin="lgc-skeletons-mist" className={`lgc-root ${props.className??''}`} />;
}
