'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LetterheadProfileProps };
/** レターヘッドの人物印と名前の基線を揃える。 */
export default function LetterheadProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="letterhead-profile" />;
}
