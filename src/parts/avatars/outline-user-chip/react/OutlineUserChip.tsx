'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as OutlineUserChipProps };
/** 細い枠と、小さな写真だけで構成。 */
export default function OutlineUserChip(props: AvatarProps) {
  return <AvatarView {...props} skin="outline-user-chip" />;
}
