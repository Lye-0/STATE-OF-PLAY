'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as ReceiptColumnSkeletonProps };
/** 短い見出しと明細行を、細長い受取票の形で保つ。 */
export default function ReceiptColumnSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="receipt-column-skeleton" />;
}
