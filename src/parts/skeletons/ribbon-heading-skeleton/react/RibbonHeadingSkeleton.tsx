'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as RibbonHeadingSkeletonProps };
/** 実人物名の帯を、図版の前を横切る大きな見出しリボンとして掛ける。人物の104px以上の平らな面から左右34pxの自由端が86/122px下へ返り、図版は帯の24px後ろへ入る。装飾のための小さい紫の角印ではなく、実見出しそのものが布の主面。両端の切欠きは実背景へ抜け、人物・本文・資料の文字は無変形で読める。 */
export default function RibbonHeadingSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ribbon-heading-skeleton" />;
}
