'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as PebbleFrameProfileProps };
/** 肖像の小石を、一つの成形された台座へ載せる人物像。普通の淡緑カードと丸いアバター枠を廃し、88pxの非対称な肖像石、そこへ16px入る22pxの丸い受け、96pxから始まる名前の石台へ組む。写真と初期文字は小石の実面に固定し、本人名/所属を台座の同じ平面へ記す。全人物へ外箱を足さず、石と台座の露出した外形を主役にする。 */
export default function PebbleFrameProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="pebble-frame-profile" />;
}
