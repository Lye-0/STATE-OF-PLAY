'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StitchedPageSkeletonProps };
/** 人物の布面と本文の布面を、実穴を通る横糸で縫い合わせる。二面の間には24pxの本当の背景が通り、40pxの糸が各面へ8px入って44px間隔の穴を結ぶ。図版は上の同じ布列、三資料は下の縫い帯へ置く。狭幅では二面を上下へ開き、人物情報と本文を全幅で読みながら水平の縫い目へ切り替える。native文字は変形せず、待機中と実内容の同じ素材面を保つ。 */
export default function StitchedPageSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stitched-page-skeleton" />;
}
