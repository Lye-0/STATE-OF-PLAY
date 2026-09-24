'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ContactSheetPortraitProps };
/** 重なったプリントが立ち上がり、写真の余白に名前が現れる。 */
export default function ContactSheetPortrait(props: AvatarProps) {
  return <AvatarView {...props} skin="contact-sheet-portrait" />;
}
