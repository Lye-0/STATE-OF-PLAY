'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SoftContactProfileProps };
/** 連絡先に馴染む柔らかな四角。 */
export default function SoftContactProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="soft-contact-profile" />;
}
