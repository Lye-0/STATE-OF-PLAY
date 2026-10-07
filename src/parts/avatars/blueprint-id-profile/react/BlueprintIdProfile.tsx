'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BlueprintIdProfileProps };
/** 人物IDを図面の仕様行として組む。 */
export default function BlueprintIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="blueprint-id-profile" />;
}
