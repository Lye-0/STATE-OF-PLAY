'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CameoProfileProps };
/** カメオの人物と人物名を一枚の横長の肖像票にする。 */
export default function CameoProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="cameo-profile" />;
}
