'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StoneReliefProfileProps };
/** 一つの石の大きい切欠きへ肖像を高く浮き出す人物像。薄緑の角丸カードを廃し、始端の半径44pxの実切欠き、そこへ20px入る100×88pxの肖像、終端の36pxの斜め破断と12pxの下の石面へ組む。人物名と所属は彫った石の平らな部分へ置き、写真を石の凹みの形で歪めない。狭幅は名前を肖像の下へ回し、切欠きと肖像の重なりを保持する。 */
export default function StoneReliefProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stone-relief-profile" />;
}
