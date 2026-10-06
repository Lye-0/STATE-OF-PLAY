'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as FrontispieceProfileProps };
/** 大きな上の写真窓と、見出しのような署名を二段に組む。 */
export default function FrontispieceProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="frontispiece-profile" />;
}
