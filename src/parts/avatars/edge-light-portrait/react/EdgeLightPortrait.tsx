'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as EdgeLightPortraitProps };
/** 暗い写真窓の一辺を光らせ、名前を光の延長として揃える。 */
export default function EdgeLightPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="edge-light-portrait" />;
}
