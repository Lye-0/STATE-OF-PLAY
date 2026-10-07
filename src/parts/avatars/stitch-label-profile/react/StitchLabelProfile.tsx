'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StitchLabelProfileProps };
/** 縫った名札の一辺に肖像を留める。 */
export default function StitchLabelProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stitch-label-profile" />;
}
