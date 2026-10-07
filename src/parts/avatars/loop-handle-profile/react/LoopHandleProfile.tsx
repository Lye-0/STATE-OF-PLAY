'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LoopHandleProfileProps };
/** 細い持ち手のような外周。 */
export default function LoopHandleProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="loop-handle-profile" />;
}
