'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CircleProfileProps };
/** 輪郭と写真の余白を整えた基本形。 */
export default function CircleProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="circle-profile" />;
}
