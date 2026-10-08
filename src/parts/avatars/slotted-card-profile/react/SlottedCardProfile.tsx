'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as SlottedCardProfileProps };
/** カード差しのメンバー一覧。三枚の票を独立した溝へ差し込み、選択した票の支えを点灯する。 */
export default function SlottedCardProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="slotted-card-profile" />;
}
