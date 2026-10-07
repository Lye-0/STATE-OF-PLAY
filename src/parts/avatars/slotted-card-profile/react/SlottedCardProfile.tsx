'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SlottedCardProfileProps };
/** スロット付きのカードを縦に並べる。 */
export default function SlottedCardProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="slotted-card-profile" />;
}
