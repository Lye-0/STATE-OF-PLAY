'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PostmarkPortraitProps };
/** 消印のような外周と短い水平線が、人物の識別印を作る。 */
export default function PostmarkPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="postmark-portrait" />;
}
