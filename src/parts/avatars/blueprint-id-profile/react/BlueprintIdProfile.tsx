'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BlueprintIdProfileProps };
/** 図面の寸法線のような人物枠。 */
export default function BlueprintIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="blueprint-id-profile" />;
}
