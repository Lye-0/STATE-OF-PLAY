'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as MedallionSeatProfileProps };
/** 小さなメダリオンの選択。顔を円形に固定し、選択した人物の下の短い支えを太くする。 */
export default function MedallionSeatProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="medallion-seat-profile" />;
}
