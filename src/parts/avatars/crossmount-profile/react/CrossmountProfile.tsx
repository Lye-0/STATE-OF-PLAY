'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as CrossmountProfileProps };
/** 四つの小さな角台で写真を留め、選択時に角の間隔を広げる。 */
export default function CrossmountProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="crossmount-profile" />;
}
