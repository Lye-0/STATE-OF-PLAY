'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as WarmStudioColorProps };
/** RGBの数値と大きな色面を確認する制作向けカラーピッカー。額縁を持つ小さな見本と平らな編集行で、色の微調整に集中できる。 */
export default function WarmStudioColor(props: ColorProps) {
  return <ColorView {...props} skin="warm-studio-color" />;
}
