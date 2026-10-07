'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ViewfinderProfileProps };
/** ビューファインダーの四隅と人物名の読取欄。 */
export default function ViewfinderProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="viewfinder-profile" />;
}
