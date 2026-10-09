'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as StackedSwatchColorProps };
/** 保存した色そのものを重ねる、実見本カードの色選択。外箱の偽の重なり影を廃し、92pxのnativeカードを24pxずつ実際に重ね、各カードの上68pxを確実に露出する。偶数のカードは16px奥へ差し込み、実HEXを同じ紙ラベルに印字する。hoverでカードや文字を動かさず、選択線だけを変える。色面・数値軸・HEXは積層の外で読める。 */
export default function StackedSwatchColor(props: ColorProps) {
  return <ColorView {...props} skin="stacked-swatch-color" />;
}
