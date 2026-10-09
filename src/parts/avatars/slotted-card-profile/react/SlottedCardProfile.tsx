'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SlottedCardProfileProps };
/** 差込み口の片側から実肖像が張り出す人物の厚い紹介板。普通の名簿を廃し、100×104pxの実写真の終端12pxを、板の前の24pxの露出した保持口へ入れる。写真は口の後、16pxの名前は口の先の同じ板の平面へ置き、人物を囲う写真カードを別に作らない。板の斜めの自由端/7pxの上端/10pxの下端と、12pxの重なりで差込みの前後関係を見せる。在席表示は口に隠れない写真の上隅へ置く。 */
export default function SlottedCardProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="slotted-card-profile" />;
}
