'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ApertureTicketProfileProps };
/** 写真の脇の小さな切欠きと、横向きの署名が個人を区別する。 */
export default function ApertureTicketProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="aperture-ticket-profile" />;
}
