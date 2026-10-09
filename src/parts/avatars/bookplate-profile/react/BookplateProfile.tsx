'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BookplateProfileProps };
/** 蔵書票の罫線と小さなしおりを持つ人物札。肖像と氏名を対にし、活字の見出しと余白で製本の印象を作る。 */
export default function BookplateProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="bookplate-profile" />;
}
