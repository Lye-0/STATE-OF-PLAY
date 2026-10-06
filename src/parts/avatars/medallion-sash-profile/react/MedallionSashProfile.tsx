'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as MedallionSashProfileProps };
/** 縦長の人物印と、下に折り返した名前の帯を一つにする。 */
export default function MedallionSashProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="medallion-sash-profile" />;
}
