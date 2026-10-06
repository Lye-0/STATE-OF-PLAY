'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CutoutPortraitProps };
/** 紙の切抜きのような輪郭と、横に添えた短い署名で人物を示す。 */
export default function CutoutPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="cutout-portrait" />;
}
