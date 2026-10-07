'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as FoldedIdProfileProps };
/** 折り返したIDカードの隅。 */
export default function FoldedIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="folded-id-profile" />;
}
