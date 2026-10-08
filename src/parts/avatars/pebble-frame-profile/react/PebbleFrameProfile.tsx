'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PebbleFrameProfileProps };
/** 小石の受けに載せる肖像。顔は円のまま、外の浅い縁と下の名前面を一つの受け皿にする。 */
export default function PebbleFrameProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="pebble-frame-profile" />;
}
