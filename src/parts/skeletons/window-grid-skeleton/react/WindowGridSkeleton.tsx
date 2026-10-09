'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as WindowGridSkeletonProps };
/** 左の三資料と右の図版を、窓の格子として一つに揃える。資料列を64px、図版を192pxへ確保し、両方に同じ1pxの線と12pxの間隔を使う。人物の見出しは全幅の上、本文は全幅の下で読める。待機中の小点や孤立したボタンを作らず、実資料の44px以上の面をそのまま予約する。 */
export default function WindowGridSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="window-grid-skeleton" />;
}
