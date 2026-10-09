'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as FoldedSwatchColorProps };
/** 同じ見本紙から折り出した二つの舌を、実切口へ通して自立させる色見本スタンド。通常パネルの下の折面を廃し、SVを載せた完全な矩形の紙面から左右36pxの舌を出し、後方台紙の32pxの実切口へ入れる。切口の前の保持端が舌を4px以上覆い、舌の上下には8px以上の本当の空気が通る。SV自体は無変形で固定し、HSV/HEX/保存色は後の台紙の別の平面へ置く。上下二ページやZ折を反復せず、同じ紙の自己支持で色を編集する。 */
export default function FoldedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="folded-swatch-color" />;
}
