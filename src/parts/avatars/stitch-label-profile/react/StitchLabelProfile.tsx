'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StitchLabelProfileProps };
/** 写真を布ラベルの縫い目で囲む。 */
export default function StitchLabelProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stitch-label-profile" />;
}
