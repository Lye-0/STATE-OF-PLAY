'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StoneReliefProfileProps };
/** 石の浮彫のような浅い額。 */
export default function StoneReliefProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stone-relief-profile" />;
}
