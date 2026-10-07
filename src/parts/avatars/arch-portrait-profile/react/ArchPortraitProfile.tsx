'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ArchPortraitProfileProps };
/** アーチ形の肖像と細い台座。 */
export default function ArchPortraitProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="arch-portrait-profile" />;
}
