'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CompactPersonProfileProps };
/** 密度の高い一覧向けの人物表示。 */
export default function CompactPersonProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="compact-person-profile" />;
}
