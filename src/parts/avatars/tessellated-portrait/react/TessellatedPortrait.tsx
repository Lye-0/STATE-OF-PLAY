'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as TessellatedPortraitProps };
/** 六角形の肖像の周囲で、薄い多面体が向きを変える。 */
export default function TessellatedPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="tessellated-portrait" />;
}
