'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as OrbitalPortraitProps };
/** 人に触れると軌道が傾き、選んだ輪郭へ光が集まる。 */
export default function OrbitalPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="orbital-portrait" />;
}
