'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SquareProfileProps };
/** 角を柔らかくした正方形のプロフィール。 */
export default function SquareProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="square-profile" />;
}
