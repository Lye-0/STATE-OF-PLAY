'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LoopHandleProfileProps };
/** 輪を持つ人物札を一列の連絡票として並べる。 */
export default function LoopHandleProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="loop-handle-profile" />;
}
