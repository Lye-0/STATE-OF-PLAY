'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ArchPortraitProfileProps };
/** アーチの肖像を水平な台座の名前へ接続。 */
export default function ArchPortraitProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="arch-portrait-profile" />;
}
