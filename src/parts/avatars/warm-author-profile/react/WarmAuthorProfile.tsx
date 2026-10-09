'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as WarmAuthorProfileProps };
/** 著者名を見出しとして読める人物一覧。縦長の肖像と明朝体の氏名を組み合わせ、細い上下罫で本文に馴染ませる。 */
export default function WarmAuthorProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="warm-author-profile" />;
}
