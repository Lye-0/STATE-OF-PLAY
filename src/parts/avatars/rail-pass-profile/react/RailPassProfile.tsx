'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RailPassProfileProps };
/** 通行証の写真窓と下の名札。 */
export default function RailPassProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="rail-pass-profile" />;
}
