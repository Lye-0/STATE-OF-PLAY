'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BookplateProfileProps };
/** 製本した一枚の人物票。元の左の綴じ線と段の素材差を保持し、64pxの肖像と16pxの人物名を14pxで同じ行へ近づける。二重の写真枠/小さい名前の長い下線を廃し、6pxの背と4pxの紙の小口へ限定する。姓名と所属は行の平らな紙全体を使い、狭幅でも読字領域を確保する。 */
export default function BookplateProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="bookplate-profile" />;
}
