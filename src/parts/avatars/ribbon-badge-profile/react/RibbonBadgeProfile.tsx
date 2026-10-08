'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RibbonBadgeProfileProps };
/** 人物を示す短いバッジ帯。円形の顔の下に名前のリボンを置き、選択でその帯だけを濃くする。 */
export default function RibbonBadgeProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="ribbon-badge-profile" />;
}
