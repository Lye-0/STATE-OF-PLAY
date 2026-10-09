'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CameoProfileProps };
/** 卵形のカメオと薄い横罫で人物を読むプロフィール。元の二重の輪郭とカメオの比率を保持し、顔と名前の距離を8pxへ、人物名を16px/所属を12pxへ揃える。狭幅は60×68pxの肖像と名前を同じ行へ置き、小さい文字を三列へ押し込まない。選択でも画像/文字/native押面を拡大しない。 */
export default function CameoProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="cameo-profile" />;
}
