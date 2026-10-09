'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StonePigmentColorProps };
/** 顔料を読みやすい石の作業面へまとめる。120pxの実色相輪と156pxのSVを隣り合わせに置き、狭幅では上下へ分ける。丸い保存色と平らな数値面の役割を区別し、台は上8px・下14pxの密度で支える。黒い大枠や模擬目盛を増やさず、実色と固定native入力を主役にする。 */
export default function StonePigmentColor(props: ColorProps) {
  return <ColorView {...props} skin="stone-pigment-color" />;
}
