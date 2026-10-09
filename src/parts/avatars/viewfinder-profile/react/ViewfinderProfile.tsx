'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ViewfinderProfileProps };
/** 四つの角が実肖像だけを焦点化するプロフィール。元のファインダーの主形を保持し、競合していた外面の矩形/下線/背景付き名前枠を廃止する。76pxの写真と外7pxの三太角を一つの階層へ揃え、16pxの本人名を12pxの距離で置く。選択の縮小を廃し、画像・角・native当たりは固定する。 */
export default function ViewfinderProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="viewfinder-profile" />;
}
