'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as InitialsProfileProps };
/** 画像がなくても、名前のイニシャルを美しく。 */
export default function InitialsProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="initials-profile" />;
}
