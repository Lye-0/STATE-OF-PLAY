'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StitchLabelProfileProps };
/** 縫い付けた布の名札に肖像と氏名を横に並べるプロフィール。折りカードをやめ、縫い目と布の端を一体にする。 */
export default function StitchLabelProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stitch-label-profile" />;
}
