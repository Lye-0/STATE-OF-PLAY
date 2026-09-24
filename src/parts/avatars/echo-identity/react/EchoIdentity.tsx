'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as EchoIdentityProps };
/** 薄い輪郭が肖像から広がり、静かな余韻で戻ってくる。 */
export default function EchoIdentity(props: AvatarProps) {
  return <AvatarView {...props} skin="echo-identity" />;
}
