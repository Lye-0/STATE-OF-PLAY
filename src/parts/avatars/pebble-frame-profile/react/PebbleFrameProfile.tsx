'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PebbleFrameProfileProps };
/** 小石の人物面と平らな名前の欄を連ねる。 */
export default function PebbleFrameProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="pebble-frame-profile" />;
}
