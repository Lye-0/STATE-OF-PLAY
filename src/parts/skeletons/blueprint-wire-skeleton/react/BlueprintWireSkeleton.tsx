'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BlueprintWireSkeletonProps };
/** 建築図と右の三つの資料を、寸法を保つワイヤー組版へ載せる。180pxの図面と66pxの資料列、下の人物と本文の順序を読み込み前後で揃える。架空の細線の装飾で骨格を濁らせず、実内容の領域を淡青の面と線で区別する。狭幅では資料列を48pxへ調整し、人物や本文は全幅で読む。 */
export default function BlueprintWireSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="blueprint-wire-skeleton" />;
}
