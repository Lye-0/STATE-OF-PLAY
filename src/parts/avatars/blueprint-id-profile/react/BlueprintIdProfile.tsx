'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BlueprintIdProfileProps };
/** 肖像と氏名を細い製図基準線へ揃えるプロフィール。大きな支持脚を除き、人物情報を設計図の主役にする。 */
export default function BlueprintIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="blueprint-id-profile" />;
}
