'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as IrisPortraitProps };
/** 八枚の絞り羽根が開き、肖像を一段奥から浮かび上がらせる。 */
export default function IrisPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="iris-portrait" />;
}
