'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as CeramicCardSkeletonProps };
/** 円形の図版と人物情報を、陶の標本札へまとめる。上の円窓と人物の二列、下の全幅の本文と資料の順を保ち、読み込み中も小点を散らさない。上6px・下10pxの面の密度、42pxの一角と円窓の関係で材を整える。狭幅では円窓160pxと全幅の人物説明へ切り替え、実文字の可読性を優先する。 */
export default function CeramicCardSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="ceramic-card-skeleton" />;
}
