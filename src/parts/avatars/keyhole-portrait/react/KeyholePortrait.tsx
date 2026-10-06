'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as KeyholePortraitProps };
/** 丸い上辺と細い下辺を持つ人物窓が、短い名札へ続く。 */
export default function KeyholePortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="keyhole-portrait" />;
}
