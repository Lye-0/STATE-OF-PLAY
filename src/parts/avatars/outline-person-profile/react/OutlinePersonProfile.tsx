'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as OutlinePersonProfileProps };
/** 薄い輪郭と写真を主体にする。 */
export default function OutlinePersonProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="outline-person-profile" />;
}
