'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StaggeredPortraitProps };
/** 写真と署名の高さを交互にずらし、人物の列に穏やかなリズムを作る。 */
export default function StaggeredPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="staggered-portrait" />;
}
