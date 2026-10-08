'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ViewfinderProfileProps };
/** ファインダーの人物枠。顔の四隅だけに印を置き、選択で角印の間隔が少し狭まる。 */
export default function ViewfinderProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="viewfinder-profile" />;
}
