'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LatticePortraitProps };
/** 角い写真を細い格子の後ろへ置き、選択した人物の枠を開く。 */
export default function LatticePortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="lattice-portrait" />;
}
