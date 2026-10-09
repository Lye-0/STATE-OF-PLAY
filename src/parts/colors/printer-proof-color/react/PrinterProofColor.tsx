'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as PrinterProofColorProps };
/** 印刷の実見本面とRGB軸を読む校正紙。元のRGBを見せる配置を保持し、色を直接示す見本とnativeの赤/緑/青の実値を12pxで読む。紙の左右8px/10pxと下12pxを同じ材へ揃え、実入力を活字の装飾へ変えない。パレットは44px、HEXは44px高のnative入力で保存色とフォーム値を一致させる。 */
export default function PrinterProofColor(props: ColorProps) {
  return <ColorView {...props} skin="printer-proof-color" />;
}
