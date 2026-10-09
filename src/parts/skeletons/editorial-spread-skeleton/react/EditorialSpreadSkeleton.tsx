'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as EditorialSpreadSkeletonProps };
/** 画像の縦列と本文の列を、編集誌面として先に予約する。左の38%を240px以上の画像列、右を人物と本文へ分け、下の三つの資料を全幅へ置く。待機中と実内容で同じ組版を使い、人物名・役割・本文は十分な文字サイズと行間で読める。読み込みへ戻る際はnative入力のfocusを安全に退避し、同じ入力とキャレットを保持する。 */
export default function EditorialSpreadSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="editorial-spread-skeleton" />;
}
