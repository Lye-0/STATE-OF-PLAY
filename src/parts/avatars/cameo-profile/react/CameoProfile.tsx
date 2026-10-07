'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CameoProfileProps };
/** 横顔のカメオを思わせる楕円の額。 */
export default function CameoProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="cameo-profile" />;
}
