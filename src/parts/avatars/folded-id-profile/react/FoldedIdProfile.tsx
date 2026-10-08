'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as FoldedIdProfileProps };
/** 折り返した身分票。顔と名前を同じ紙の上に置き、選択は右上の小さな折り目で示す。 */
export default function FoldedIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="folded-id-profile" />;
}
