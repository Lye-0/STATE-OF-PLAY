'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RibbonPassProps };
/** 肖像を囲む帯が横にほどけ、名前へつながる。 */
export default function RibbonPass(props: AvatarProps) {
  return <AvatarView {...props} skin="ribbon-pass" />;
}
