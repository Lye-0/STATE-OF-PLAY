'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PearlMedallionProps };
/** 磁器のレリーフのような肖像に、柔らかな光沢が巡る。 */
export default function PearlMedallion(props: AvatarProps) {
  return <AvatarView {...props} skin="pearl-medallion" />;
}
