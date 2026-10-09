'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as StoneMosaicSkeletonProps };
/** 実図版の石板と、その説明を担う一続きの石台を、実蟻継ぎで組む。画像の石板の下端には幅104px・深さ32pxの台形の実切欠きが開き、下の人物・本文・資料を持つ台の104×32pxの実舌が隙間なく嵌まる。四つの丸角矩形を廃し、画像と説明の二つの本体の支持関係を主形にする。人物も本文も無変形の平らな領域へ置き、末端だけ斜めに払って台の厚さを示す。 */
export default function StoneMosaicSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="stone-mosaic-skeleton" />;
}
