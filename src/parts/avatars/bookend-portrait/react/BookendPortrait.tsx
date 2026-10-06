'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BookendPortraitProps };
/** 人物の写真を二つの厚い支柱で支え、名前を下の細い空間へ置く。 */
export default function BookendPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="bookend-portrait" />;
}
