'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LoopHandleProfileProps };
/** 大きく開いた輪の上で写真を支え、下の実氏名を輪の握りへ置く人物紹介。通常の写真穴のアーチ札を廃し、左右16px/上9pxの連続した輪と、128pxから始まる一体の名前の握りへ組む。写真は空隙の中央へ固定し、左右の8pxの受けが実写真の中心から輪の内壁まで直接届く。1人を全幅で表示した場合も、輪の内側は写真以外が大きく開き、同じ16pxの側材を保つ。名前と写真は輪の別々の実領域を使い、native画像/字/押面は動かさない。 */
export default function LoopHandleProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="loop-handle-profile" />;
}
