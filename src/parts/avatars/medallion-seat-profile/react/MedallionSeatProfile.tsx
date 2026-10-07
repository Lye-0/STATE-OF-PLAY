'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as MedallionSeatProfileProps };
/** 薄いメダルの周囲に細線を重ねる。 */
export default function MedallionSeatProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="medallion-seat-profile" />;
}
