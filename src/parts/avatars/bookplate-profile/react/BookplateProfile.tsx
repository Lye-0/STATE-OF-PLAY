'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BookplateProfileProps };
/** 蔵書票の中に人物を配置。 */
export default function BookplateProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="bookplate-profile" />;
}
