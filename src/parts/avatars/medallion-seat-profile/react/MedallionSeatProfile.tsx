'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as MedallionSeatProfileProps };
/** 円形の人物メダルを、曲がった一つの座へ載せるプロフィール。カメオの卵形とは異なる90pxの正円と4pxの鋳造縁を保持し、下の細い水平線を120×22pxの実切欠きのある受けへ揃える。円形面の下16pxは受けの曲がる口へ入り、本人名は別のカードを足さず座の下の平面で読む。選択はメダルの縁の密度へ示し、本人画像や名前の位置は動かさない。 */
export default function MedallionSeatProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="medallion-seat-profile" />;
}
