'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as MedallionSeatProfileProps };
/** メダリオンを人物情報の左の座へ収める。 */
export default function MedallionSeatProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="medallion-seat-profile" />;
}
