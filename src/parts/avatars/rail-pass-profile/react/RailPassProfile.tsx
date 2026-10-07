'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RailPassProfileProps };
/** 乗車票の番号面と人物情報を左右で分ける。 */
export default function RailPassProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="rail-pass-profile" />;
}
