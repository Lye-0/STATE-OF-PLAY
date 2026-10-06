'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CheckoutRowSkeletonProps };
/** 商品の小窓と明細の行を分け、下に合計欄の場所を確保する。 */
export default function CheckoutRowSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="checkout-row-skeleton" />;
}
