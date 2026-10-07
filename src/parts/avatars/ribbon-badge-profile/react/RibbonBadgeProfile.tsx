'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RibbonBadgeProfileProps };
/** リボンで留めた人物の下に署名を配置。 */
export default function RibbonBadgeProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="ribbon-badge-profile" />;
}
