'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as FoldedIdProfileProps };
/** 肖像の面と名前の面が、大きい一つの折れを境に向きを変える人物紙。上の小さいタブと折角カードを廃し、172pxの斜めの写真面、32pxずれて下へ続く氏名面、両方の実端へ接する幅全体の40pxの折面を作る。100pxの写真は上の面を実際に使い、16pxの本人名と所属は下の別方向の面で全行を読む。上の面の斜め下端と下の面の斜め上端を、四点の一つの折面へ直接つなぐ。写真・文字・native押面を変形させず、狭幅/RTLも同じ折れと読む二領域を保持する。 */
export default function FoldedIdProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="folded-id-profile" />;
}
