'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StitchLabelProfileProps };
/** 縫い付けた人物ラベル。顔の枠は動かさず、氏名側の縫い目と布の端を選択に反応させる。 */
export default function StitchLabelProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stitch-label-profile" />;
}
