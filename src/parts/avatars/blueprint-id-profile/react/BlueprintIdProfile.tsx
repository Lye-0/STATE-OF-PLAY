'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as BlueprintIdProfileProps };
/** 人物の写真版を、開いた三角支持の製図台へ載せる紹介。角形アバターへL字の罫線を足す方式を廃し、実肖像82px、そこへ4px入る120pxの台面、下へ58px広がる二股の実支持を一続きに組む。支点の下には真の三角の空隙があり、名前はその下へ全幅の16pxで読む。定規の文字や偽の測定値を足さず、実写真版と開いた支持形で設計の性格を出す。 */
export default function BlueprintIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="blueprint-id-profile" />;
}
