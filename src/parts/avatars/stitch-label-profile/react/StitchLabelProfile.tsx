'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StitchLabelProfileProps };
/** 実肖像を織布の大きい開いた写真ポケットへ差す人物ラベル。短い縦の縫い線を廃し、82pxの肖像の下20pxを保持する幅広い織ったポケット口、斜めの生布端と12pxの折る素材へ変える。本人名/所属も同じ一枚布の下の平らな領域へ記し、写真の周囲へ普通の丸枠や社員カードを足さない。選択では織布の密度を変える。 */
export default function StitchLabelProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stitch-label-profile" />;
}
