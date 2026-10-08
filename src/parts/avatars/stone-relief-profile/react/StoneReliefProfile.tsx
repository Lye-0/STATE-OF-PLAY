'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as StoneReliefProfileProps };
/** 浅い浮彫りの人物枠。中央の顔は丸く保ち、上下の余白で選択と人物名を落ち着いて分ける。 */
export default function StoneReliefProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="stone-relief-profile" />;
}
