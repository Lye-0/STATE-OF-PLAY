'use client';
import React from 'react';
import {SkeletonView,type SkeletonProps} from '../../../../shared/signature/skeleton-view';
import '../styles.css';
export type { SkeletonProps as BookJacketSkeletonProps };
/** 一枚のジャケットの巻返しを、実本文紙の背面へ通して反対の小口へ戻す。実図版と人物の表紙の右に三資料を載せた68pxの巻面を置き、本文上端の右の32×76pxの実口へ入れる。幅26pxの一続きの帯が本文の裏で対角へ渡り、左下の同寸の実口から現れて下へ32px出る。全周の面取り枠と表紙・本文の24pxの断絶を廃し、隠れる巻返しと二つの実開口でつなぐ。本文は広い固定面、狭幅は細い12pxの巻返しと20pxの口へ切り替えて文字の幅を確保する。 */
export default function BookJacketSkeleton(props: SkeletonProps) {
  return <SkeletonView {...props} skin="book-jacket-skeleton" />;
}
