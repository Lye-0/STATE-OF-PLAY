'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SlottedCardProfileProps };
/** 差込口に肖像票を収めた横長の名簿。 */
export default function SlottedCardProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="slotted-card-profile" />;
}
