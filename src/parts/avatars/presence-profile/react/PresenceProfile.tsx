'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PresenceProfileProps };
/** 氏名と提供された在席状態を、ひとつの行へ。 */
export default function PresenceProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="presence-profile" />;
}
