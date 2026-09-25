'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LgcAvatarsMistProps };
/** 氏名と提供された在席状態を、ひとつの行へ。 */
export default function LgcAvatarsMist(props: AvatarProps) {
  return <AvatarView {...props} skin="lgc-avatars-mist" className={`lgc-root ${props.className??''}`} />;
}
