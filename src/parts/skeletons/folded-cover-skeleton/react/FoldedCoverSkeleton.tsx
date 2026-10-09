'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as FoldedCoverSkeletonProps };
/** 実人物情報を持つカバーフラップと、画像・本文の誌面を実折背でつなぐ。112pxのフラップから6pxの終端材を含めた26pxの背が右の紙へ接触する。狭幅では情報を細列へ押し込まず、人物フラップを上の全幅へ開き、30pxの背を下の誌面へつなぐ。人物名16px・役割14pxを保ち、待機中と読み込み後で同じ列と折背を使う。 */
export default function FoldedCoverSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="folded-cover-skeleton" />;
}
