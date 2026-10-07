'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ViewfinderProfileProps };
/** 照準枠の四隅で写真を囲む。 */
export default function ViewfinderProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="viewfinder-profile" />;
}
