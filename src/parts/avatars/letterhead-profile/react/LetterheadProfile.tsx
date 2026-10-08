'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LetterheadProfileProps };
/** レターヘッドの署名一覧。顔と名前を横に組み、罫線と右端の細い選択印だけで人物を区切る。 */
export default function LetterheadProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="letterhead-profile" />;
}
