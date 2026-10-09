'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as ArchPortraitProfileProps };
/** 肖像と本人名を一枚の明るいアーチへ揃えるプロフィール。元のアーチ形の肖像枠を保持し、別の黄土色の名前ブロックを廃止する。84×96pxの写真のすぐ下へ同じ材料の16pxの本人名を置き、上6px/下8pxのアーチの成形面へ繋ぐ。本人名と役職の全文を同じ一枚の面で読み、選択でサイズ/写真の形を変えない。 */
export default function ArchPortraitProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="arch-portrait-profile" />;
}
