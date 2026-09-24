'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as DeskplateIdentityProps };
/** 研磨された名札の窓と、押し下がる肖像ボタン。 */
export default function DeskplateIdentity(props: AvatarProps) {
  return <AvatarView {...props} skin="deskplate-identity" />;
}
