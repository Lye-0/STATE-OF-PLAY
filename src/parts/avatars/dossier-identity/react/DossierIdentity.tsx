'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as DossierIdentityProps };
/** 広い人物行に、写真・名前・在席の印を資料のように揃える。 */
export default function DossierIdentity(props: AvatarProps) {
  return <AvatarView {...props} skin="dossier-identity" />;
}
