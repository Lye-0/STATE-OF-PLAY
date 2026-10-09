'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as TextileDyeColorProps };
/** 実SV色面そのものを、一枚の大きい染布として編集する。親の額縁を廃し、228pxの無変形の色面の下端の実黒から30pxの房へ続ける。房の14pxの糸束の間は8pxずつ実展示背景へ抜け、左右5pxの織端は編集面の外へ置く。数値軸/HEX/保存色は布の外の別の道具面に分離し、淡い紙色で実値を読む。clothを入力文字へ掛けず、nativeのキャレットとHSVの位置は固定する。 */
export default function TextileDyeColor(props: ColorProps) {
  return <ColorView {...props} skin="textile-dye-color" />;
}
