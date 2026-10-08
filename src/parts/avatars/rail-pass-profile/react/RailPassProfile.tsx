'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RailPassProfileProps };
/** 人物の通行証。顔と名前を横並びにした三行の票にし、右端の状態点まで一直線に整える。 */
export default function RailPassProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="rail-pass-profile" />;
}
