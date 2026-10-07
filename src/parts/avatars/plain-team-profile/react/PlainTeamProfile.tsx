'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PlainTeamProfileProps };
/** チーム一覧向けの基本的な丸型。 */
export default function PlainTeamProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="plain-team-profile" />;
}
