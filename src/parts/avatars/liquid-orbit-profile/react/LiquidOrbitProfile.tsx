'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LiquidOrbitProfileProps };
/** 丸い肖像を包む透明な膜が、触れると少し流れ出す。 */
export default function LiquidOrbitProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="liquid-orbit-profile" />;
}
