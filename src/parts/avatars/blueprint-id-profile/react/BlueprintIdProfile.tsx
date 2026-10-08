'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BlueprintIdProfileProps };
/** 人物の設計カード。顔の正方形と氏名の二列を図面の罫で結び、情報を読みやすく整列。 */
export default function BlueprintIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="blueprint-id-profile" />;
}
