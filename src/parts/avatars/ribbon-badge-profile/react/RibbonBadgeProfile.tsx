'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RibbonBadgeProfileProps };
/** リボンのように下へ伸びる名前欄。 */
export default function RibbonBadgeProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="ribbon-badge-profile" />;
}
