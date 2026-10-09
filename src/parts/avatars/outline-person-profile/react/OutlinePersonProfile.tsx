'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as OutlinePersonProfileProps };
/** 小さな角形肖像と氏名・役割を横に揃えた人物一覧。区切り線で行を読み分け、選択した人物は左端で示す。 */
export default function OutlinePersonProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="outline-person-profile" />;
}
