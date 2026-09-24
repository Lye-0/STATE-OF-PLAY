'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PassportChipProps };
/** 切り欠きのあるパスが開き、肖像と名前が一枚につながる。 */
export default function PassportChip(props: AvatarProps) {
  return <AvatarView {...props} skin="passport-chip" />;
}
