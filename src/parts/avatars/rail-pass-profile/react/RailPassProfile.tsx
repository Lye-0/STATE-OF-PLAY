'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RailPassProfileProps };
/** 人物の肖像を二本の連続したレールへ載せ、名前の読む面を横の接続片で受けるプロフィール。一般的なIDカードと左の罫線を廃し、5pxの連続レール、肖像の両端の10pxの成形受け、名前面へ渡る8pxの同じ接続片を作る。人物名は16pxの実情報として肖像へ近づけ、長い所属も同じ平らな面へ折返す。値を動く位置の進捗へ捏造せず、選択は本人の受け材の密度へ示す。 */
export default function RailPassProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="rail-pass-profile" />;
}
