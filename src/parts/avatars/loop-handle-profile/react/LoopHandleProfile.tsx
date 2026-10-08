'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LoopHandleProfileProps };
/** 吊り下げる人物札。顔の上の小さなループと縦の名札を使い、顔を揺らさず選択状態を伝える。 */
export default function LoopHandleProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="loop-handle-profile" />;
}
