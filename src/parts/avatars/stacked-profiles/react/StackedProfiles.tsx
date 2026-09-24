'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StackedProfilesProps };
/** 重ねた肖像を、触れると少しずつ開く。 */
export default function StackedProfiles(props: AvatarProps) {
  return <AvatarView {...props} skin="stacked-profiles" />;
}
