'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StoneReliefProfileProps };
/** 石の浮彫りと記名を水平に接続する。 */
export default function StoneReliefProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stone-relief-profile" />;
}
