'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ArchPortraitProfileProps };
/** アーチの肖像窓。人物を縦の小さな窓として揃え、下の銘板を選択操作の面にする。 */
export default function ArchPortraitProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="arch-portrait-profile" />;
}
