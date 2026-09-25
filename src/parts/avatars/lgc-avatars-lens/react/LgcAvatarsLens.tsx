'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LgcAvatarsLensProps };
/** 輪郭と写真の余白を整えた基本形。 */
export default function LgcAvatarsLens(props: AvatarProps) {
  return <AvatarView {...props} skin="lgc-avatars-lens" className={`lgc-root ${props.className??''}`} />;
}
