'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LetterheadProfileProps };
/** レターヘッドに添えた角形肖像。 */
export default function LetterheadProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="letterhead-profile" />;
}
