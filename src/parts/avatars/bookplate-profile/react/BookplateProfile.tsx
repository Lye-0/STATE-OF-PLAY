'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BookplateProfileProps };
/** 蔵書票の人物紹介。写真を四角い小版、名前を下の銘として配置し、綴じ線の色で選ぶ。 */
export default function BookplateProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="bookplate-profile" />;
}
