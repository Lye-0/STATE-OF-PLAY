'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CameoProfileProps };
/** 肖像のカメオ。顔を固定した楕円の縁と台座を使い、選択は縁だけに細い金色を加える。 */
export default function CameoProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="cameo-profile" />;
}
