'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as WarmAuthorProfileProps };
/** 著者紹介に合う穏やかな肖像。 */
export default function WarmAuthorProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="warm-author-profile" />;
}
