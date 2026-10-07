'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PebbleFrameProfileProps };
/** 丸い小石の輪郭に写真を置く。 */
export default function PebbleFrameProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="pebble-frame-profile" />;
}
